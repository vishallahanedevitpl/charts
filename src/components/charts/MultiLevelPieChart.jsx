import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import multilevelpie from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { salesData } from "../../api/salesData";
ReactFC.fcRoot(FusionCharts, multilevelpie, FusionTheme);

const MultiLevelPieChart = () => {
  const pieChartConfig = {
    type: "multilevelpie",
    renderAt: "chart-container",
    id: "myChart",
    width: "600",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Split of Top Products Sold",
        subCaption: "Last Quarter",
        captionFontSize: "14",
        subcaptionFontSize: "14",
        baseFontColor: "#333333",
        baseFont: "Helvetica Neue,Arial",
        basefontsize: "9",
        subcaptionFontBold: "0",
        bgColor: "#ffffff",
        canvasBgColor: "#ffffff",
        showBorder: "0",
        showShadow: "0",
        showCanvasBorder: "0",
        pieFillAlpha: "60",
        pieBorderThickness: "2",
        hoverFillColor: "#cccccc",
        pieBorderColor: "#ffffff",
        useHoverColor: "1",
        showValuesInTooltip: "1",
        showPercentInTooltip: "0",
        numberPrefix: "$",
        plotTooltext: "$label, $$valueK, $percentValue",
      },

      category: salesData.data,
    },
  };
  return (
    <>
      <ReactFC {...pieChartConfig} />
    </>
  );
};

export default MultiLevelPieChart;
