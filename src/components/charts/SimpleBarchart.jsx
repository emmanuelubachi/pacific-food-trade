"use client";
import React from "react";
import * as echarts from "echarts/core";
import ReactECharts from "echarts-for-react";

export default function SimpleBarchart() {
  echarts.registerTheme("mytheme", {
    color: "#919e8b",
  });
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 400 }}
        theme={"mytheme"}
        opts={{ renderer: "svg" }}
      />
    </>
  );
}
