import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import MultiLevelPie from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import AdminLayout from "../layout/admin";
import CompositeChart from "../components/charts/CompositeChart";
import MultiLevelPieChart from "../components/charts/MultiLevelPieChart";

ReactFC.fcRoot(FusionCharts, MultiLevelPie, FusionTheme);
const ChartPage = () => {
  return (
    <AdminLayout pageTitle="Sales Charts">
      <section className="section dashboard">
        <div className="card">
          <div className="card-body pt-3 row center">
            <MultiLevelPieChart />
          </div>
        </div>
        <div className="card">
          <div className="card-body pt-3">
            <CompositeChart />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default ChartPage;
