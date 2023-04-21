import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import MultiLevelPie from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import AdminLayout from "../layout/admin";
import CompositeChart from "../components/charts/CompositeChart";

ReactFC.fcRoot(FusionCharts, MultiLevelPie, FusionTheme);
const DashboardPage = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <section className="section dashboard">
        <div className="card">
          <div className="card-body pt-3">
            <CompositeChart />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
