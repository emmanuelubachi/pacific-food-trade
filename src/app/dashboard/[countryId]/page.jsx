import React from "react";
// import { useRouter } from "next/navigation";

import FoodImport from "@/components/sections/FoodImport";
import FoodExport from "@/components/sections/FoodExport";
import FoodTrend from "@/components/sections/FoodTrend";
import Hero from "@/components/sections/Hero";

import Country from "@/data/pacific_country.json";
import TopFoodExportData from "@/data/food_exports_by_year.json";
import TopFoodImportData from "@/data/food_imports_by_year.json";
import FoodTradeTrend from "../../../data/food_trade_trend.json";
import Navigation from "@/components/sections/navigation";

const CountryPage = ({ params }) => {
  const countryISO = params.countryId;

  const country = Country.filter(
    (countryinfo) => countryinfo.iso3 === countryISO
  );
  const exportData = TopFoodExportData.filter(
    (foodData) => foodData.iso3 === countryISO
  );
  const importData = TopFoodImportData.filter(
    (foodData) => foodData.iso3 === countryISO
  );
  const tradeTrendData = FoodTradeTrend.filter(
    (trendData) => trendData.iso3 === countryISO
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
        <section className="bg-gradient-to-b from-pri-12 to-white">
          <div
            className=" h-96 max-w-screen-xl px-4 mx-auto 
            md:gap-8 
            xl:gap-0 
            py-8 
          bg-white 
          rounded-t-3xl 
          shadow-pri-12 
          shadow-[0_30px_70px_-50px_rgba(0,0,0,0.3)]"
          >
            {importData.length && (
              <FoodImport data={importData} countryName={country[0].country} />
            )}
            {exportData.length && (
              <FoodExport data={exportData} countryName={country[0].country} />
            )}

            {tradeTrendData && <FoodTrend data={tradeTrendData} />}
          </div>
        </section>
        {/* <Navigation /> */}
      </main>
    );
  }
};

export default CountryPage;
