import React from "react";
import "./AdminNav.css";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { TiNews } from "react-icons/ti";

const AdminNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <FaUser />
          <NavLink to="/admin/users">Users</NavLink>
        </li>
        <li>
          <RiMessage3Fill />
          <NavLink to="/admin/contact">Contacts</NavLink>
        </li>
        <li>
          <FaBlogger />
          <NavLink to="/admin/users">Blogs</NavLink>
        </li>
        <li>
          <LuNewspaper />
          <NavLink to="/admin/users">Corporate News</NavLink>
        </li>
        <li>
          <TiNews />
          <NavLink to="/admin/users">Photo News</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
