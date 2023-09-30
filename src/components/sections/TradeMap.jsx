import React from "react";
import MapFilters from "../chartFrame/MapFilters";
import { getTop4YearsWithLabels } from "@/lib/utils";

const TradeMap = ({ data, countryName }) => {
  //const YearFilterValues = getTop4YearsWithLabels(data);

  return (
    <section className="">
      <div className="m-auto max-w-screen-xl px-4 lg:my-12 my-6">
        <h2
          className="mb-4
                text-xl min-[400px]:text-xl 
                sm:text-2xl lg:text-3xl
                font-bold leading-none tracking-tight 
               text-stone-600 "
        >
          Global Food Sources
        </h2>
        <div className="mb-4">
          <p
            className="max-w-6xl
            text-gray-600 font-medium 
            text-xs leading-5 tracking-tight
            sm:text-sm 
            md:leading-7
            lg:text-base
            lg:leading-8 lg:mb-8"
          >
            Explore the countries supplying food to {countryName} and their
            import quantities &lpar;tonnes&rpar; in 2018.{" "}
            <span className=" italic text-gray-600 font-light">
              Hover on a country to view specific import details and dive deeper
              into the dynamics of food trade.
            </span>
          </p>
        </div>
        <MapFilters data={data} />
        {/* <p className=" ">
          Explore the international food trade relationships of {countryName} in
          this interactive map. The map highlights the countries from which{" "}
          {countryName} imports food, along with the quantity of food imports in
          tonnes from each partner nation in the year 2018.
        </p> */}
      </div>
    </section>
  );
};

export default TradeMap;
