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

// https://reactrouter.com/en/main/routers/create-browser-router
const router = createBrowserRouter(
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
      <Route path="/profile/*" element={<Profile />} />
    </Route>
  )
);

export { router };
