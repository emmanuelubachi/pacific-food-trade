"use client";
import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";
import worldJson from "@/data/countries.json";

//echarts.registerMap("US", USA);
echarts.registerMap("world", worldJson);

const Map = (Data) => {
  // console.log(Data.Data);

  const option = {
    title: {
      text: "USA Population Estimates (2012)",
      subtext: "Data from www.census.gov",
      sublink: "http://www.census.gov/popest/data/datasets.html",
      left: "right",
    },
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      left: "right",
      min: 500000,
      max: 38000000,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
    },
    toolbox: {
      show: true,
      //orient: 'vertical',
      left: "left",
      top: "top",
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },

    series: [
      {
        name: "",
        type: "map",
        roam: true,
        map: "world",
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { ISO_A3: 'ASU', value: 4822023 },
          { ISO_A3: 'CHN', value: 731449 },
          { ISO_A3: 'FJI', value: 6553255 },
          { ISO_A3: 'IND', value: 2949131 },
          { ISO_A3: 'GRC', value: 38041430 },
          { ISO_A3: 'GBR', value: 5187582 },
          { ISO_A3: 'HKG', value: 3590347 },
          { ISO_A3: 'ITA', value: 917092 },
          { ISO_A3: 'JPN', value: 632323 },
          { ISO_A3: 'PHL', value: 19317568 },
          { ISO_A3: 'FSM', value: 9919945 },
          { ISO_A3: 'GUM', value: 1392313 }
        ],
      },
    ],
  };
  return (
    // <></>
    <ReactEcharts
      option={option}
      //onEvents={onEvents}
      style={{ height: "70vh", width: "100%" }}
    />
  );
};

export default Map;
