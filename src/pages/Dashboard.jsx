import React from "react";
import AdminLayout from "../layout/admin";

const DashboardPage = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <section className="section dashboard">
        <div className="card">
          <div className="card-body pt-3">
            <div className="row">charts will go here</div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
