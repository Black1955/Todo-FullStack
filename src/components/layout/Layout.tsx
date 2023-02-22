import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
const Layout = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <div style={{ alignItems: "center", display: "flex", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
