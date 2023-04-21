import React from "react";
import AdminLayout from "../layout/admin";
import MultiLevelPieChart from "./charts/MultiLevelPieChart";

const DashboardPage = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <section className="section dashboard">
        <div className="card">
          <div className="card-body pt-3">
            <div className="row center">
              {/* charts will go here */}
              <MultiLevelPieChart />
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
