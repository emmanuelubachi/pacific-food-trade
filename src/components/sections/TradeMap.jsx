import React from "react";
import MapFilters from "../chartFrame/MapFilters";
import { getTop4YearsWithLabels } from "@/lib/utils";

const TradeMap = ({ data }) => {
  //const YearFilterValues = getTop4YearsWithLabels(data);

  return (
    <section className="bg-gradient-to-b from-pri-12 to-white">
      <div
        className="max-w-screen-xl mx-auto 
            md:gap-8 
            xl:gap-0 
            py-6 px-2 
          bg-white 
            rounded-t-3xl 
          shadow-pri-12 
            shadow-[0_30px_70px_-50px_rgba(0,0,0,0.3)]"
      >
        <div className="m-auto max-w-screen-xl px-4 mb-4">
          <h2
            className="mb-4
                text-xl min-[400px]:text-2xl 
                sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl
                font-bold leading-none tracking-tight 
               text-stone-600 "
          >
            Where does the food come from?
          </h2>

          <div className="mb-4">
            <p className="mb-3 text-lg text-stone-500 md:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work
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

          <MapFilters data={data} />
        </div>
      </div>
    </section>
  );
};

export default TradeMap;
