"use client";

import React, { useEffect, useState } from "react";
import DoubleBarchart from "../charts/DoubleBarchart";
import Loading from "../body/Loading";

const FoodTrend = ({ data, countryName }) => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const trendData = data[0];
    setDataset(trendData.Data);
  }, [data]);

  return (
    <section className="bg-white pb-24">
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
            lg:leading-8"
        >
          Follow the trajectory of food imports by {countryName} over time. This
          line chart tracks food imports from the year 1995 until 2018, offering
          insights into the general trends and fluctuations in food trade.
          Analyze how overall imports have evolved and identify key turning
          points.
        </p>

        <div
          className="gap-4 items-center
              justify-center
              mx-auto 
              md:grid md:grid-cols-1
              xl:gap-16"
        >
          <div className=" ">
            {dataset.length === 0 ? (
              <Loading />
            ) : (
              <DoubleBarchart data={dataset} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodTrend;
