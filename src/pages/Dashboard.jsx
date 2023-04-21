import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import MultiLevelPie from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import AdminLayout from "../layout/admin";
import CompositeChart from "../components/charts/CompositeChart";
import MultiLevelPieChart from "../components/charts/MultiLevelPieChart";
import MultiLevelPieTable from "../components/tableData/MultiLevelPieTable";

ReactFC.fcRoot(FusionCharts, MultiLevelPie, FusionTheme);
const DashboardPage = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <section className="section dashboard">
        <div className="card">
          <div className="card-body pt-3">
            <CompositeChart />
            <div className="row center">
              {/* charts will go here */}
              <MultiLevelPieChart />
              <MultiLevelPieTable />
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
