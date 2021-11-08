import passport from 'passport';
import { BearerStrategy, ITokenPayload, VerifyCallback } from 'passport-azure-ad';
import { NextFunction, Request, Response } from 'express';
import { AzureToken } from '../interfaces/token';
import { AuthorizeOptions } from '../interfaces/authorize';

const { APP_CLIENT_ID, INTILITY_TENANT_ID } = process.env;

if (!INTILITY_TENANT_ID) {
    throw new Error('Missing Environment variable: INTILITY_TENANT_ID');
}

if (!APP_CLIENT_ID) {
    throw new Error('Missing Environment variable: APP_CLIENT_ID');
}

const intilityIssuers = [
    `https://sts.windows.net/${INTILITY_TENANT_ID}/`,
    `https://sts.windows.net/${INTILITY_TENANT_ID}/v2.0`,
    `https://login.microsoftonline.com/${INTILITY_TENANT_ID}/`,
    `https://login.microsoftonline.com/${INTILITY_TENANT_ID}/v2.0`
];

/**
 * Create a new passport BearerStrategy to handle authenticate and decoding of the provided token.
 * Complete setup documentation can be found here https://github.com/AzureAD/passport-azure-ad#42-bearerstrategy.
 */
const mainStrategy = new BearerStrategy(
    {
        identityMetadata:
            `https://login.microsoftonline.com/${INTILITY_TENANT_ID}/v2.0/.well-known/openid-configuration`,
        clientID: `${APP_CLIENT_ID}`,
        audience: [ `${APP_CLIENT_ID}`, `api://${APP_CLIENT_ID}` ],
        loggingLevel: 'warn',
        // Validate the `iss` claim in id_token against user provided issuer
        validateIssuer: true,
        // List of allowed issuers
        issuer: intilityIssuers
    },
    (token: ITokenPayload, done: VerifyCallback) => {
        if (!token.oid) {
            done(new Error('User OID is not found in token'));
        } else {
            done(null, token);
        }
    },
);

// Tell passport to use the configured strategy
passport.use('mainStrategy', mainStrategy);

/**
 * Use Passport to authenticate the token provided. 
 * It is important that the label defined in passport.use function match the label provided here
 */
export const authenticate = passport.authenticate([ 'mainStrategy' ], { session: false });

/**
 * Check and validate the decoded token.
 *
 * @param {string[]} acceptedRoles
 */
export const authorize = (acceptedRoles: string[], options?: AuthorizeOptions) => (req: Request, res: Response, next: NextFunction): Response | void => {
    const decodedUserInfo = req.user as AzureToken;
    
    if (decodedUserInfo) {
        const { roles, acct, tid } = decodedUserInfo;

        // Option 1:
        // Check authenticated users TenantID and block users outside of the AA-Intility tenant
        const tenants = options?.allowedTenants || [ INTILITY_TENANT_ID ];
        if (!tenants.includes(tid)) {
            return res.status(401).json({
                message: 'Users outside of provided tenant is not permitted'
            });
        }

        // Option 2: 
        // Check authenticated users account status. Requires "acct" as an optional claim in the App Registration. 
        // Regular user = 0, Guest user = 1.
        if (!options?.allowGuests && acct !== 0) {
            return res.status(401).json({
                message: 'Guest users is not allowed'
            }); 
        }

        // Validate the provided whitelisted roles against token
        if (checkRoles(roles, acceptedRoles)) {
            return next();
        } else {
            return res.status(403).json({
                message: 'You are unauthorized to access this resource.'
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unable to locate user info from decoded token'
        });
    }
};

/**
 * Check if the users roles is defined and if users roles is in acceptedRoles
 *
 * @param {string[]} userRoles
 * @param {string[]} acceptedRoles
 */
const checkRoles = (userRoles: string[], acceptedRoles: string[]) => {   
    if (!userRoles) {
        return false;
    }

    return userRoles.some((r) => acceptedRoles.includes(r))
        ? true
        : false;
};

// export configures passport instance
export default passport;
