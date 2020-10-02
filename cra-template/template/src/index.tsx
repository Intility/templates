import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "components/App";
import MsalBrowserProvider from "@intility/react-msal-browser";
import * as serviceWorker from "serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_SENTRY_RELEASE,
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
  });
}

const msal = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    // if multi-tenant, use https://login.microsoftonline.com/common
    authority:
      "https://login.microsoftonline.com/9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6",
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
  },
  endpoints: {
    "https://graph.microsoft.com": ["User.Read"],
  },
};

ReactDOM.render(
  <Router>
    <MsalBrowserProvider config={msal}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MsalBrowserProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
