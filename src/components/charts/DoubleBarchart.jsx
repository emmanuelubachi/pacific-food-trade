"use client";
import React from "react";
import * as echarts from "echarts/core";
import VintageTheme from "/public/vintage.project.json";
import ReactECharts from "echarts-for-react";

export default function DoubleBarchart({ data }) {
  //echarts.registerTheme("vintage", VintageTheme.theme);

  echarts.registerTheme("barcolor", {
    color: ["#cfaa23"], //"#cfaa23"  6189a8
  });
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
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
        type: "bar",
      },
    ],
  };
  return (
    <>
      <ReactECharts
        option={option}
        className="sm:h-full min-h-[45vh]"
        theme={"barcolor"}
        opts={{ renderer: "svg" }}
      />
    </>
  );
}
