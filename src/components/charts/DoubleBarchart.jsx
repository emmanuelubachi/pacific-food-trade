"use client";
import React from "react";
import * as echarts from "echarts/core";
import VintageTheme from "/public/vintage.project.json";
import ReactECharts from "echarts-for-react";

export default function DoubleBarchart({ data, chartType, chartColor }) {
  //echarts.registerTheme("vintage", VintageTheme.theme);

  echarts.registerTheme("doubleBarColor", {
    color: ["#cfaa23"], //"#cfaa23"  #6189a8
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
        className="sm:h-full min-h-[45vh]"
        theme={"doubleBarColor"}
        opts={{ renderer: "svg" }}
      />
    </>
  );
}
