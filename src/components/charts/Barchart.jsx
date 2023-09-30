"use client";
import React from "react";
import * as echarts from "echarts/core";
import VintageTheme from "/public/vintage.project.json";
import ReactECharts from "echarts-for-react";

export default function Barchart({ data, chartType }) {
  //echarts.registerTheme("vintage", VintageTheme.theme);

  echarts.registerTheme("barcolor", {
    color: ["#919e8b"], //"#cfaa23"  #6189a8
  });
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
          formatter: "{value} Quantity(Tonnes)",
        },
      },
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.Year.toString()),
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Import",
        data: data.map((item) => item.Quantity),
        type: chartType,
        areaStyle: {
          opacity: 0.6,
        },
      },
    ],
  };
  return (
    <>
      <ReactECharts
        option={option}
        className="sm:h-full min-h-[30vh]"
        theme={"barcolor"}
        opts={{ renderer: "svg" }}
      />
    </>
  );
}
