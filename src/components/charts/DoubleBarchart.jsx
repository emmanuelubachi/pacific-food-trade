"use client";
import React from "react";
import * as echarts from "echarts/core";
import VintageTheme from "/public/vintage.project.json";
import ReactECharts from "echarts-for-react";

export default function DoubleBarchart({ data }) {
  //echarts.registerTheme("vintage", VintageTheme.theme);

  echarts.registerTheme("vintage", {
    color: ["#919e8b", "#6189a8"],
  });
  const option = {
    xAxis: {
      type: "category",
      data: data.map((item) => item.Year.toString()),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Export",
        data: data.map((item) => item.Export),
        type: "bar",
      },
      {
        name: "Import",
        data: data.map((item) => item.Import),
        type: "bar",
      },
    ],
  };
  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 300 }}
        theme={"vintage"}
        opts={{ renderer: "svg" }}
      />
    </>
  );
}
