import { Nav } from "@intility/bifrost-react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faHome,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  return (
    <Nav
      appName="App Name"
      logoOnClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
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
      {children}
    </Nav>
  );
}
