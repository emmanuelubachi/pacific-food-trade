import React from "react";
// import { useRouter } from "next/navigation";

import Country from "@/data/pacific_country.json";
import FoodTradeImports from "@/data/food_imports_map.json";
import TopFoodExportData from "@/data/food_exports_by_year.json";
import TopFoodImportData from "@/data/food_imports_by_year.json";
import FoodTradeTrend from "@/data/food_trade_trend.json";

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

        {/* {console.log(tradeImports)} */}

        <TradeMap data={tradeImports} />

        {/* {importData.length && (
          <FoodImport data={importData} countryName={country[0].country} />
        )} */}

        {/* {exportData.length && (
          <FoodExport data={exportData} countryName={country[0].country} />
        )} */}

        {tradeTrendData && <FoodTrend data={tradeTrendData} />}
        {/* <Navigation /> */}
      </main>
    );
  }
};

export default CountryPage;
