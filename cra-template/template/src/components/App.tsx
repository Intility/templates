import React from "react";
import logo from "assets/logo.svg";
import { TopBar, Sidebar } from "@intility/bifrost-react";
import {
  faHome,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// required for importing Open Sans font and apply it to body
import "@intility/bifrost-react/dist/bifrost-app.css";
import "./App.css";

const App = () => (
  <>
    <Sidebar>
      <Sidebar.Item icon={faHome}>Home</Sidebar.Item>
      <Sidebar.Item icon={faInfoCircle}>About</Sidebar.Item>
    </Sidebar>
    <TopBar appName="App Name">
      <TopBar.Item icon={faUser}>Profile</TopBar.Item>
    </TopBar>
    <main>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </main>
  </>
);

export default App;
