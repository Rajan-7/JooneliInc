import React from "react";
import AdminHeader from "./AdminHeader";
import AdminNav from "./components/AdminNav";
import "./AdminLayout.css";
import { Outlet } from "react-router-dom";
// import AdminUser from "../Jooneli/Admin/AdminUser";
// import { NavLink } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <section className="admin-section">
        <div className="container">
          <h2 className="main-heading">Admin Dashboard</h2>
          <AdminNav />
          {/* <div className="admin-content">{children}</div> */}
        </div>
      </section>
      <Outlet/>
    </>
  );
};

export default AdminLayout;
