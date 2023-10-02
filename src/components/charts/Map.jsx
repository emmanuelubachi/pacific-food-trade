"use client";
import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";
import worldJson from "@/data/countries.json";

const Map = ({ Data }) => {
  echarts.registerMap("world", worldJson);

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatNumber(value) {
    // Check if the value is NaN
    if (isNaN(value)) {
      return "No Trade";
    }

    // Check if the value is a valid number
    if (typeof value === "number") {
      return value.toLocaleString() + " (Tonnes)";
    }

    // If it's neither NaN nor a number, return an error message
    return "Invalid input";
  }

  function findHighestAndLowest(data) {
    if (!data || data.length === 0) {
      return null;
    }

    let highest = data[0];
    let lowest = data[0];

    for (let i = 1; i < data.length; i++) {
      if (data[i].value > highest.value) {
        highest = data[i];
      }
      if (data[i].value < lowest.value) {
        lowest = data[i];
      }
    }

    return {
      highest: highest,
      lowest: lowest,
    };
  }

  const result = findHighestAndLowest(Data);

  const option = {
    title: {
      text: "Quantity of Food Imported (2018)",
      subtext: "Map of Trading Partners",
      //sublink: "http://www.census.gov/popest/data/datasets.html",
      left: "right",
    },
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (param) {
        return "<bold>" + param.name + ": </bold>" + formatNumber(param.value);
      },
    },
    visualMap: {
      left: "center",
      bottom: 20,
      orient: "horizontal",
      min: result.lowest.value,
      max: result.highest.value,
      inRange: {
        color: [
          "#c8d9c1",
          "#acc6a1",
          "#90b281",
          "#749f62",
          "#5d7f4e",
          "#46603a",
          "#2f4027",
        ],
      },
      //type: "piecewise",
      text: ["High", "Low"],
      calculable: true,
      formatter: function (value) {
        return formatNumberWithCommas(value);
      },
    },
    toolbox: {
      show: true,
      orient: "vertical",
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
        name: "Quantity",
        type: "map",
        roam: true,
        map: "world",
        zoom: 1.3,
        scaleLimit: {
          min: 1,
        },
        itemStyle: {
          color: "rgb(255,255,255)",
          areaColor: "rgba(211,211,211,1)",
          borderColor: "#fff",
          borderWidth: 2,
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: "rgb(162, 167, 163)",
          },
        },
        data: Data,
        select: { disabled: true },
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
