import React, { useEffect, useState, Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions/useActions";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import { useGetIdMutation } from "../../Services/userSlice";
import Sidebar from "../SideBar/Sidebar";
import styles from "./layout.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
const Layout = () => {
  const [getId] = useGetIdMutation();
  const { UpdateId } = useActions();
  const { id } = useAppSelector(state => state.user);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [bar, setBar] = useState<boolean>(false);
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
      <Sidebar bar={bar} setBar={setBar} />
      <Suspense>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            width: "100%",
            overflow: bar ? "hidden" : "auto",
          }}
        >
          <Outlet />
        </div>
      </Suspense>
      <div onClick={() => setBar(!bar)} className={styles.burger}>
        <RxHamburgerMenu color='black' size={30} />
      </div>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default Layout;
