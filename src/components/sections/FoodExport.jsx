import React from "react";
import YearFilter from "../chartFrame/YearFilter";
import { getTop4YearsWithLabels } from "@/lib/utils";

const FoodExport = ({ data, countryName }) => {
  const title = "Food export in " + countryName;
  const YearFilterValues = getTop4YearsWithLabels(data);

  return (
    <section className="bg-gradient-to-b from-white via-orange-100 to-white py-8">
      <div className="m-auto max-w-screen-xl px-4 mb-4">
        <h2
          className="mb-4 
            text-xl min-[400px]:text-2xl 
            sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl
            font-bold leading-none tracking-tight 
            text-stone-600"
        >
          Where does the food come from?
        </h2>

        <div
          className="gap-4 items-center
              justify-center
              mx-auto 
              md:grid md:grid-cols-1
              xl:gap-16"
        >
          <div>
            <p className="mb-3 text-lg text-stone-500 md:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work
              and deploy.
            </p>
            <p className="text-stone-500">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </div>
          <h5
            className="mb-8 
            text-lg sm:text-lg md:text-xl lg:text-2xl
            font-bold leading-none tracking-tight 
            text-stone-600 "
          >
            <span></span> {title}
          </h5>

          <div className="sm:h-full min-h-screen ">
            <YearFilter data={data} options={YearFilterValues} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodExport;
