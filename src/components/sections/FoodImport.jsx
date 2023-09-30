import React from "react";
import YearFilter from "../chartFrame/YearFilter";
import { getTop4YearsWithLabels } from "@/lib/utils";

const TopFoods = ({ data, countryName }) => {
  const title = "Food import in " + countryName;
  const YearFilterValues = getTop4YearsWithLabels(data);

  return (
    <section className="bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="m-auto max-w-screen-xl px-4 g:my-8 my-4">
        <h2
          className="mb-4
          text-xl min-[400px]:text-xl 
          sm:text-2xl lg:text-3xl
          font-bold leading-none tracking-tight 
         text-stone-600"
        >
          Food Categories Overview
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
          Delve into the types of food that {countryName} imports with this
          treemap visualization. Each block represents a food category (HS2) and
          its proportion in the overall imports.{" "}
          <span className=" italic text-gray-600 font-light">
            You can filter data by year to observe changes in food preferences
            over the last 4 years. Discover the diversity of food imports and
            their trends.
          </span>
        </p>

        <div className="mx-auto items-center justify-center">
          <div className="sm:h-full min-h-screen ">
            <YearFilter title={title} data={data} options={YearFilterValues} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFoods;
