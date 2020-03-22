import React from "react";
import { Header, SearchInput } from "@code4ro/taskforce-fe-components";
import { ReactComponent as LogoSvg } from "../../assets/stamacasa.svg";

import { NavLink } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AdminDashboard from "./components/AdminDashboard";

import "./admin-page.scss";

const Logo = () => (
  <a href="/">
    <LogoSvg />
  </a>
);

const MenuItems = () => (
  <>
    <SearchInput />
    <NavLink to="/">Ioana Dumitru</NavLink>
  </>
);

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Header Logo={<Logo />} MenuItems={<MenuItems />} />
      <div className="container dashboard">
        <AdminSidebar />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminPage;
