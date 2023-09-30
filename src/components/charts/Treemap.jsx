"use client";
import React from "react";
import * as echarts from "echarts/core";
import ReactEcharts from "echarts-for-react";
import VintageTheme from "/public/vintage.project.json";

function Treemap({ data }) {
  echarts.registerTheme("vintage", VintageTheme.theme);

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const option = {
    toolbox: {
      show: true,
      left: "left",
      top: "top",
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        type: "treemap",
        data: data,
        width: "100%",
        height: "90%",
        roam: false,
        label: {
          position: "center",
          formatter: function (params) {
            return (
              `{name|` +
              params.name +
              `}` +
              "\n" +
              formatNumberWithCommas(params.value) +
              " (Tonnes)"
            );
          },
          rich: {
            name: {
              fontSize: 16,
              lineHeight: 24,
              color: "#fff",
            },
          },
        },
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      className="sm:h-full min-h-[70vh]"
      theme={"vintage"}
      opts={{ renderer: "svg" }}
    />
  );
}

export default Treemap;
