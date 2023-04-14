import React, { useEffect, useState } from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions/useActions";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import { useGetIdMutation } from "../../Services/userSlice";
import Sidebar from "../SideBar/Sidebar";

const Layout = () => {
  const [getId] = useGetIdMutation();
  const { UpdateId } = useActions();
  const { id } = useAppSelector(state => state.user);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    !token && setLoading(false);
    if (token) {
      getId({ token })
        .unwrap()
        .then(res => UpdateId(res))
        .then(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }
  return id ? (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <div style={{ alignItems: "center", display: "flex", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default Layout;
