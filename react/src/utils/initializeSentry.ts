import { init } from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function initializeSentry() {
  // https://vitejs.dev/guide/env-and-mode.html
  if (import.meta.env.PROD) {
    // https://docs.sentry.io/platforms/javascript/guides/react
    init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      release: import.meta.env.VITE_SENTRY_RELEASE,
      environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
      integrations: [new Integrations.BrowserTracing()],

      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 0.5,
    });
  }
}

export { initializeSentry };
