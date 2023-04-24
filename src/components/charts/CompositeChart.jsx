import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { salesData } from "../../api/salesData";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const CompositeChart = () => {
  const formatedData = [];
  salesData.data[0].category.forEach((ele) => {
    ele.category.forEach((el) => {
      formatedData.push(el);
    });
  });

  const chartConfigs = {
    type: "mscombi2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Sales Analysis",
        xaxisname: "Product",
        yaxisname: "Amount (In USD thousand)",
        numberprefix: "$",
        theme: "fusion",
        showxaxisline: "0",
        showyaxisline: "0",
        plotTooltext: "$label, $$valueK, $percentValue",
      },
      categories: [
        {
          category: formatedData.map((s) => {
            return { label: s.label };
          }),
        },
      ],
      dataset: [
        {
          seriesname: "Actual Sales",
          data: formatedData.map((s) => {
            return { value: s.value };
          }),
        },
        {
          seriesname: "Expected Sales",
          renderas: "line",
          data: formatedData.map((s) => {
            return { value: s.expectedSales };
          }),
        },
      ],
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default CompositeChart;
