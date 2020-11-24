import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "components/App";
import MsalBrowserProvider from "@intility/react-msal-browser";
import { BrowserRouter } from "react-router-dom";

// NODE_ENV will be 'development' during the npm start script
// and 'production' during the npm run build script
if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_SENTRY_RELEASE,
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

const msal = {
  auth: {
    // https://create-intility-app.openshift-inside.intility.no/configuration/authentication
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
  <BrowserRouter>
    <MsalBrowserProvider config={msal}>
      <StrictMode>
        <App />
      </StrictMode>
    </MsalBrowserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
