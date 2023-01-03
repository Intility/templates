import { Configuration } from "@azure/msal-browser";

/**
 * MSAL config for the PublicClientApplication
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
const config: Configuration = {
  auth: {
    clientId: "43e3c4be-c94b-430c-afc2-3055d9f88134",
    // if multi-tenant, use https://login.microsoftonline.com/common
    authority:
      "https://login.microsoftonline.com/9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6",
    redirectUri: window.location.origin,
  },
};

export { config };
