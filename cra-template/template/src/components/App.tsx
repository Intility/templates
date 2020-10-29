import React from "react";
import { Nav } from "@intility/bifrost-react";
import {
  faHome,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import * as Sentry from "@sentry/react";
import { withProfiler } from "@sentry/react";
import ErrorPage from "./ErrorPage";

// required for importing Open Sans font and apply it to body
import "@intility/bifrost-react/dist/bifrost-app.css";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  return (
    <Nav
      appName="App Name"
      logoOnClick={() => navigate("/")}
      top={
        <>
          <NavLink to="/profile">
            <Nav.Item icon={faUser}>Profile</Nav.Item>
          </NavLink>
        </>
      }
      side={
        <>
          <NavLink to="/" end>
            <Nav.Item icon={faHome}>Home</Nav.Item>
          </NavLink>
          <NavLink to="/about">
            <Nav.Item icon={faInfoCircle}>About</Nav.Item>
          </NavLink>
        </>
      }
    >
      <Sentry.ErrorBoundary fallback={<ErrorPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </Sentry.ErrorBoundary>
    </Nav>
  );
};

export default withProfiler(App);
