"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6867],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Security - Authorization",sidebar_label:"Authorization",slug:"/API/Security/Authorization",sidebar_position:2},c=void 0,u={unversionedId:"API/Security/Authorization",id:"API/Security/Authorization",title:"Security - Authorization",description:"Authorization is mostly done by inspecting the authenticated token and conditionally allow or decline users from accessing certain endpoints. We are checking for values like:",source:"@site/express/API/Security/Authorization.mdx",sourceDirName:"API/Security",slug:"/API/Security/Authorization",permalink:"/express/API/Security/Authorization",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/API/Security/Authorization.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Security - Authorization",sidebar_label:"Authorization",slug:"/API/Security/Authorization",sidebar_position:2},sidebar:"express",previous:{title:"Authentication",permalink:"/express/API/Security/Authentication"},next:{title:"CORS",permalink:"/express/API/Security/CORS"}},l=[{value:"Roles",id:"roles",children:[],level:2},{value:"Account type and Tenant ID",id:"account-type-and-tenant-id",children:[],level:2},{value:"User values in token",id:"user-values-in-token",children:[{value:"BONUS: ROT OData API query",id:"bonus-rot-odata-api-query",children:[],level:3}],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Authorization is mostly done by inspecting the authenticated token and conditionally allow or decline users from accessing certain endpoints. We are checking for values like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tid")," or tenantId: The authenticated users origin tenant ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"acct")," or account: Users account status in tenant."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roles"),": List of roles for this application.")),(0,i.kt)("h2",{id:"roles"},"Roles"),(0,i.kt)("p",null,"An official guide on how to configure your application registration to use app roles and receiving them in the token can be found in this guide: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps"},"How to: Add app roles to your application and receive them in the token")),(0,i.kt)("p",null,"Validating and checking the token is done by creating an Express middleware that validating the claims provided by the token. Passport saves the decoded token fields in the request object."),(0,i.kt)("p",null,"Add this function to your ",(0,i.kt)("inlineCode",{parentName:"p"},"middlewares/passport.ts")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Check and validate the decoded token.\n *\n * @param {string[]} acceptedRoles\n */\n export const authorize = (acceptedRoles: string[]) => (req: Request, res: Response, next: NextFunction): Response | void => {\n\n    const decodedUserInfo = req.user;\n    \n    if (decodedUserInfo) {\n        const { roles } = decodedUserInfo;\n\n        // Validate the provided whitelisted roles against token\n        checkRoles(roles, acceptedRoles)\n            .then(() => next())\n            .catch(() => {\n                return res.status(403).json({\n                    message: 'You are unauthorized to access this resource.'\n                });\n            });\n    } else {\n        return res.status(401).json({\n            message: 'Unable to locate user info from decoded token'\n        });\n    }\n};\n\n/**\n * Check if the users roles is defined and if users roles is in acceptedRoles\n *\n * @param {string[]} userRoles\n * @param {string[]} acceptedRoles\n */\n const checkRoles = (userRoles: string[], acceptedRoles: string[]): Promise<unknown> => {\n    return new Promise((resolve, reject) => {\n\n        if (!userRoles) {\n            reject(false);\n        }\n\n        return userRoles.some((r) => acceptedRoles.includes(r))\n            ? resolve(true)\n            : reject(false);\n    });\n};\n")),(0,i.kt)("p",null,"Next, secure your endpoints or express router by adding the middleware. e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"router.get(\"/\", authenticate, authorize(['<ROLE_NAME>']), controller.getByOid);\nrouter.post(\"/\", authenticate, authorize(['<ROLE_NAME>']), controller.createNewUser);\n")),(0,i.kt)("h2",{id:"account-type-and-tenant-id"},"Account type and Tenant ID"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tid")," or tenant ID is an claim provided natively by azure AD and needs no configuration."),(0,i.kt)("p",null,"To check if the user is an guest user in your tenant you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"acct")," optional claim to your token. To do this, follow this guide ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#configuring-optional-claims"},"Provide optional claims to your app"),"."),(0,i.kt)("p",null,"Alter the if-statement in the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize()")," configured in the previous step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"if (decodedUserInfo) {\n    const { roles, acct, tid } = decodedUserInfo;\n\n    // Option 1:\n    // Check authenticated users TenantID and block users outside of the AA-Intility tenant \n    if (tid !== INTILITY_TENANT_ID) {\n        return res.status(401).json({\n            message: 'Users outside of provided tenant is not permitted'\n        });\n    }\n\n    // Option 2: \n    // Check authenticated users account status. Requires \"acct\" as an optional claim in the App Registration. \n    // Regular user = 0, Guest user = 1.\n    if (acct !== 0) {\n        return res.status(401).json({\n            message: 'Guest users is not allowed'\n        }); \n    }\n\n    // REST OF ROLE VALIDATION\n\n} else {\n    return res.status(401).json({\n        message: 'Unable to locate user info from decoded token'\n    });\n}\n")),(0,i.kt)("h2",{id:"user-values-in-token"},"User values in token"),(0,i.kt)("p",null,"It's equally important to ensure that the API only responds with data or allow actions which corresponds to the authorized user's role. An example can be that you've created a multi-tenant API with a common endpoint for fetching a company's mobile subscriptions. It's then essential to actually force that multi-tenancy in your code. To accomplish this we can take a look at some of the claims provided in the token. We use token claims because they contain information about the user which are provided by a trusted resource (AD/Azure AD). "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upn"),", User principal name: this is the same as primary email for Intility users and can be used to identify the user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tid"),", Tenant ID: this can either be used alone if you have this filed in your dataset, or with ROT-OData API to lookup the company GUID or company code. This is especially important for multi tenant applications.")),(0,i.kt)("h3",{id:"bonus-rot-odata-api-query"},"BONUS: ROT OData API query"),(0,i.kt)("p",null,"The following query can be used to get a Company's GUID and/or code (e.g. AA) by using the ROT OData API. You can find the Official API documentation here: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.intility.com/DeveloperServices/open-rot-api"},"open-rot-api")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<ROT_BASE_URL>/ROTDirectoryAzureTenant?$filter=AzureTenantGUID eq <TENANT_ID_FROM_TOKEN>&$select=Directory, AzureTenantGUID&$expand=Directory($select=Name, CompanyGUID)")))}d.isMDXComponent=!0}}]);