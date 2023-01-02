import { Configuration } from "@azure/msal-browser";

const config: Configuration = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    // if multi-tenant, use https://login.microsoftonline.com/common
    authority:
      "https://login.microsoftonline.com/9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6",
    redirectUri: window.location.origin,
  },
};

export { config };
