"use client";
import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";
import worldJson from "@/data/countries.json";

// //echarts.registerMap("US", USA);
// echarts.registerMap("world", worldJson, {
//   Alaska: {
//     left: -131,
//     top: 25,
//     width: 15,
//   },
//   Hawaii: {
//     left: -110,
//     top: 28,
//     width: 5,
//   },
//   "Puerto Rico": {
//     left: -76,
//     top: 26,
//     width: 2,
//   },
// });

const Map = () => {
  // const option = {
  //   // title: {
  //   //   text: "USA Population Estimates (2012)",
  //   //   subtext: "Data from www.census.gov",
  //   //   sublink: "http://www.census.gov/popest/data/datasets.html",
  //   //   left: "right",
  //   // },
  //   tooltip: {
  //     trigger: "item",
  //     showDelay: 0,
  //     transitionDuration: 0.2,
  //   },
  //   visualMap: {
  //     left: "right",
  //     min: 500000,
  //     max: 38000000,
  //     inRange: {
  //       color: [
  //         "#313695",
  //         "#4575b4",
  //         "#74add1",
  //         "#abd9e9",
  //         "#e0f3f8",
  //         "#ffffbf",
  //         "#fee090",
  //         "#fdae61",
  //         "#f46d43",
  //         "#d73027",
  //         "#a50026",
  //       ],
  //     },
  //     text: ["High", "Low"],
  //     calculable: true,
  //   },
  //   toolbox: {
  //     show: true,
  //     //orient: 'vertical',
  //     left: "left",
  //     top: "top",
  //     feature: {
  //       dataView: { readOnly: false },
  //       restore: {},
  //       saveAsImage: {},
  //     },
  //   },

  //   series: [
  //     {
  //       name: "",
  //       type: "map",
  //       roam: true,
  //       map: "world",
  //       emphasis: {
  //         label: {
  //           show: true,
  //         },
  //       },
  //       data: [
  //         { ISO_A3: "ABW", value: "10566" },
  //         { ISO_A3: "NGA", value: "50566" },
  //       ],
  //     },
  //   ],
  // };
  return (
    <></>
    // <ReactEcharts
    //   option={option}
    //   //onEvents={onEvents}
    //   style={{ height: "70vh", width: "100%" }}
    // />
  );
};

export default Map;
