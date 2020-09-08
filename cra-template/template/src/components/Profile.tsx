import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { TabBar } from "@intility/bifrost-react";

const Profile = () => (
  <>
    <TabBar>
      <NavLink to="" end>
        <TabBar.Item>Profile</TabBar.Item>
      </NavLink>
      <NavLink to="settings">
        <TabBar.Item>Settings</TabBar.Item>
      </NavLink>
    </TabBar>
    <Routes>
      <Route path="/" element={<div>profile</div>} />
      <Route path="/settings" element={<div>settings</div>} />
    </Routes>
  </>
);

export default Profile;
