import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
const AdminLayout = ({ children, pageTitle }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1 className="text-capitalize">{pageTitle}</h1>
        </div>
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
