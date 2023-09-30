"use client";

import React, { useEffect, useState } from "react";
import DoubleBarchart from "../charts/DoubleBarchart";
import Loading from "../body/Loading";
import { Button, ButtonGroup } from "@nextui-org/react";

const FoodTrend = ({ data, countryName }) => {
  const [dataset, setDataset] = useState([]);
  const [charttype, setCharttype] = useState("bar");

  useEffect(() => {
    const trendData = data[0];
    setDataset(trendData.Data);
  }, [data]);

  const handleBarclick = () => {
    setCharttype("bar");
  };

  const handleLineclick = () => {
    setCharttype("line");
  };

  return (
    <section className="bg-white my-12">
      <div className="m-auto max-w-screen-xl pt-4 px-4">
        <h2
          className="mb-4
          text-xl min-[400px]:text-xl 
          sm:text-2xl lg:text-3xl
          font-bold leading-none tracking-tight 
         text-stone-600"
        >
          Historical Imports Analysis
        </h2>
        <p
          className="max-w-7xl
            text-gray-600 font-medium 
            text-xs leading-5 tracking-tight
            sm:text-sm 
            md:leading-7
            lg:text-base
            lg:leading-8
            mb-4"
        >
          Follow the trajectory of food imports by {countryName} over time. This
          chart tracks food imports from the year 1995 until 2018, offering
          insights into the general trends and fluctuations in food trade.
          Analyze how overall imports have evolved and identify key turning
          points.
        </p>

        <div className="mx-auto items-center justify-center">
          <ButtonGroup className=" gap-0.5">
            <Button
              onClick={handleBarclick}
              size="sm"
              className="hover:bg-pri-13/40 text-pri-13 focus:ring-black"
            >
              Bar
            </Button>
            <Button
              onClick={handleLineclick}
              size="sm"
              className="hover:bg-pri-1/50 text-pri-1"
            >
              Line
            </Button>
          </ButtonGroup>
          <div>
            {dataset.length === 0 ? (
              <Loading />
            ) : (
              <DoubleBarchart data={dataset} chartType={charttype} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodTrend;
