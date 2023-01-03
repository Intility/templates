import { wrapCreateBrowserRouter } from "@sentry/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

/**
 * Sentry integration
 * @see https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
 */
const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);

/**
 * The applications router, using react-router data APIs
 * @see https://reactrouter.com/en/main/routers/create-browser-router
 */
const router = sentryCreateBrowserRouter(
  createRoutesFromElements(
    <Route
      errorElement={<ErrorPage />}
      element={
        <Navigation>
          <Outlet />
        </Navigation>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

export { router };
