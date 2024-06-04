import { Nav } from "@intility/bifrost-react";
import { NavLink } from "react-router-dom";
import {
  faHome,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ThemePicker } from "./ThemePicker";
import reactLogo from "~/assets/react.svg";

export default function Navigation({ children }: React.PropsWithChildren) {
  return (
    <Nav
      logo={
        <NavLink to="/" className="bf-neutral-link">
          <Nav.Logo logo={reactLogo}>App Name</Nav.Logo>
        </NavLink>
      }
      top={
        <>
          <NavLink to="/profile">
            <Nav.Item icon={faUser}>Profile</Nav.Item>
          </NavLink>
          <ThemePicker />
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
      {children}
    </Nav>
  );
}
