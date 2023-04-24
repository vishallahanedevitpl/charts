import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import MultiLevelPie from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import AdminLayout from "../layout/admin";
import SalesDataTable from "../components/tableData/SalesData";

ReactFC.fcRoot(FusionCharts, MultiLevelPie, FusionTheme);
const TablePage = () => {
  return (
    <AdminLayout pageTitle="Sales List">
      <section className="section dashboard">
        <div className="card">
          <div className="card-body pt-3">
            <SalesDataTable />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default TablePage;
