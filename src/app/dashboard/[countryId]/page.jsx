import React from "react";
// import { useRouter } from "next/navigation";

import Country from "@/data/pacific_country.json";
import FoodTradeImports from "@/data/food_imports_map.json";
import TopFoodExportData from "@/data/food_exports_by_year.json";
import TopFoodImportData from "@/data/food_imports_by_year.json";
import FoodTradeTrend from "@/data/imports_trend.json";

import FoodImport from "@/components/sections/FoodImport";
import FoodExport from "@/components/sections/FoodExport";
import FoodTrend from "@/components/sections/FoodTrend";
import Hero from "@/components/sections/Hero";

import Navigation from "@/components/sections/navigation";
import TradeMap from "@/components/sections/TradeMap";

const CountryPage = ({ params }) => {
  const countryISO = params.countryId;

  const country = Country.filter(
    (countryinfo) => countryinfo.iso3 === countryISO
  );
  const tradeImports = FoodTradeImports.filter(
    (trade) => trade.ImporterISO === countryISO
  );
  // const exportData = TopFoodExportData.filter(
  //   (foodData) => foodData.iso3 === countryISO
  // );
  const importData = TopFoodImportData.filter(
    (foodData) => foodData.iso3 === countryISO
  );
  const tradeTrendData = FoodTradeTrend.filter(
    (trendData) => trendData.ImporterISO === countryISO
  );

  if (country.length === 0) {
    // Handle the case where no matching data is found, e.g., show an error message.
    return (
      <main className="m-auto flex justify-center items-center py-24 ">
        <p>No data found for the specified country.</p>
      </main>
    );
  } else {
    return (
      <main>
        {country.length && <Hero countryName={country[0].country} />}

        <section className="bg-gradient-to-b from-pri-12 to-white px-4 lg:mb-8 mb-4">
          <div
            className="max-w-screen-xl mx-auto
            md:gap-8 
            xl:gap-0 
            py-6 px-2 
          bg-pri-1 
            rounded-2xl 
          shadow-pri-12 
            shadow-[0_30px_70px_-50px_rgba(0,0,0,0.3)]"
          >
            <div className="m-auto max-w-screen-xl px-4">
              <h2
                className="mb-4
                text-xl min-[400px]:text-xl 
                sm:text-2xl lg:text-3xl
                font-bold leading-none tracking-tight 
               text-stone-100 "
              >
                Where does the food come from?
              </h2>
              <p
                className="
                  text-gray-200 font-medium
                  text-xs leading-5 tracking-tight
                  sm:text-sm 
                  md:leading-7
                  lg:text-base
                  lg:leading-8"
              >
                Analyze the trends that have shaped {country[0].country}&apos;s
                culinary landscape and discover the stories behind its food
                imports. Whether you&apos;re here for research, policymaking, or
                simply curiosity, this dashboard will provide you with valuable
                insights into the world of food trade in {country[0].country}.
                Let&apos;s embark on this data-driven exploration together.
              </p>
            </div>
          </div>
        </section>

        {tradeImports.length && (
          <TradeMap data={tradeImports} countryName={country[0].country} />
        )}

        {importData.length && (
          <FoodImport data={importData} countryName={country[0].country} />
        )}

        {tradeTrendData && (
          <FoodTrend data={tradeTrendData} countryName={country[0].country} />
        )}

        {/* {exportData.length && (
          <FoodExport data={exportData} countryName={country[0].country} />
        )} */}

        {/* <Navigation /> */}
      </main>
    );
  }
};

export default CountryPage;
