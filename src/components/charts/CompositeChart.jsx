import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { salesData } from "../../api/salesData";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "mscombi2d",
  width: "100%",
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Sales Analysis",
      subcaption: "ACME Inc.",
      xaxisname: "Product",
      yaxisname: "Amount (In USD)",
      numberprefix: "$",
      theme: "fusion",
      showxaxisline: "0",
      showyaxisline: "0",
      plotTooltext: "$label, $$valueK",
    },
    categories: [
      {
        category: salesData.map((s) => {
          return { label: s.product };
        }),
      },
    ],
    dataset: [
      {
        seriesname: "Actual Sales",
        data: salesData.map((s) => {
          return { value: s.sales };
        }),
      },
      {
        seriesname: "Expected Sales",
        renderas: "line",
        data: salesData.map((s) => {
          return { value: s.expectedSales };
        }),
      },
    ],
  },
};

const CompositeChart = () => {
  // console.log(
  //   salesData.map((s) => {
  //     return { label: s.product };
  //   })
  // );
  return <ReactFC {...chartConfigs} />;
};

export default CompositeChart;
