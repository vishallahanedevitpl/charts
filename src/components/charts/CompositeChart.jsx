import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "mscombi2d",
  width: "100%",
  height: 400,
  dataFormat: "json",
  dataSource: `
  {
    "chart": {
        "caption": "Expense Analysis",
        "subcaption": "ACME Inc.",
        "xaxisname": "Region",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "showxaxisline": "0",
        "showyaxisline": "0"
      },
      "categories": [
        {
          "category": [
            {
              "label": "East"
            },
            {
              "label": "West"
            },
            {
              "label": "South"
            },
            {
              "label": "North"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Actual Expenses",
          "data": [
            {
              "value": "1441290"
            },
            {
              "value": "855912"
            },
            {
              "value": "911404"
            },
            {
              "value": "648136"
            }
          ]
        },
        {
          "seriesname": "Budgeted Expenses",
          "renderas": "line",
          "data": [
            {
              "value": "1297430"
            },
            {
              "value": "776485"
            },
            {
              "value": "685352"
            },
            {
              "value": "726791"
            }
          ]
        }
      ]
  }
  `,
};

const CompositeChart = () => {
  return <ReactFC {...chartConfigs} />;
};

export default CompositeChart;
