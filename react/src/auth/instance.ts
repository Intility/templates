import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { config } from "./config";

const instance = new PublicClientApplication(config);

// when single-account application
// set active account after login or load to avoid specifying account to instance functions
function setActiveAccount() {
  let accounts = instance.getAllAccounts();
  if (accounts.length > 0) {
    let account = accounts[0];
    instance.setActiveAccount(account);
  }
}

setActiveAccount();

instance.addEventCallback((message) => {
  if (
    message.eventType === EventType.LOGIN_SUCCESS ||
    message.eventType === EventType.SSO_SILENT_SUCCESS
  ) {
    setActiveAccount();
  }
});

export { instance };
