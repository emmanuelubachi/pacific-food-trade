"use client";
import React from "react";
import * as echarts from "echarts/core";
import ReactEcharts from "echarts-for-react";
import VintageTheme from "/public/vintage.project.json";

function Treemap({ data }) {
  echarts.registerTheme("vintage", VintageTheme.theme);

  const option = {
    series: [
      {
        type: "treemap",
        data: data,
        width: "100%",
        height: "90%",
        roam: false,
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      style={{ height: 700 }}
      theme={"vintage"}
      opts={{ renderer: "svg" }}
    />
  );
}

export default Treemap;
