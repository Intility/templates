import {
  AuthenticationResult,
  EventType,
  PublicClientApplication,
} from "@azure/msal-browser";
import { config } from "./config";

/**
 * A PublicClientApplication instance
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const instance = new PublicClientApplication(config);

/**
 * Register event callback to set the active account atfer successful login
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/accounts.md#active-account-apis
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/events.md
 */
instance.addEventCallback((message) => {
  if (
    message.eventType === EventType.LOGIN_SUCCESS ||
    message.eventType === EventType.SSO_SILENT_SUCCESS
  ) {
    const result = message.payload as AuthenticationResult;
    instance.setActiveAccount(result.account);
  }
});

export { instance };
