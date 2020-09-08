import React from "react";
import { TopBar, Sidebar } from "@intility/bifrost-react";
import {
  faHome,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

// required for importing Open Sans font and apply it to body
import "@intility/bifrost-react/dist/bifrost-app.css";
import "./App.css";

const App = () => (
  <>
    <Sidebar>
      <NavLink to="/" end>
        <Sidebar.Item icon={faHome}>Home</Sidebar.Item>
      </NavLink>
      <NavLink to="/about">
        <Sidebar.Item icon={faInfoCircle}>About</Sidebar.Item>
      </NavLink>
    </Sidebar>
    <TopBar appName="App Name">
      <NavLink to="/profile">
        <TopBar.Item icon={faUser}>Profile</TopBar.Item>
      </NavLink>
    </TopBar>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </main>
  </>
);

export default App;
