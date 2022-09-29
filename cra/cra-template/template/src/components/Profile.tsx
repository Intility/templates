import { NavLink, Routes, Route } from "react-router-dom";
import { Tabs } from "@intility/bifrost-react";

const Profile = () => (
  <>
    <Tabs>
      <NavLink to="" end>
        Profile
      </NavLink>
      <NavLink to="settings">Settings</NavLink>
    </Tabs>
    <Routes>
      <Route path="/" element={<div>profile</div>} />
      <Route path="/settings" element={<div>settings</div>} />
    </Routes>
  </>
);

export default Profile;
