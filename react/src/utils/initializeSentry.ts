import { init, reactRouterV6Instrumentation } from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { useEffect } from "react";
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from "react-router-dom";

/**
 * Initializes sentry if the application is built for production.
 * @see https://docs.sentry.io/platforms/javascript/guides/react
 * @see https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
 */
function initializeSentry() {
  if (import.meta.env.PROD) {
    init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      release: import.meta.env.VITE_SENTRY_RELEASE,
      environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
      integrations: [
        new Integrations.BrowserTracing({
          routingInstrumentation: reactRouterV6Instrumentation(
            useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes,
          ),
        }),
      ],

      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 0.5,
    });
  }
}

export { initializeSentry };
