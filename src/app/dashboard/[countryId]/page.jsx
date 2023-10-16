import React from "react";
import { fetchCountry_info, fetchData } from "@/lib/utils";

import Hero from "@/components/sections/Hero";
import TradeMap from "@/components/sections/TradeMap";
import FoodTrend from "@/components/sections/FoodTrend";
import FoodImport from "@/components/sections/FoodImport";
import FoodProductTrend from "@/components/sections/FoodProductTrend";


export default async function CountryPage({ params }) {
  const countryISO = params.countryId

  const country_info = await fetchCountry_info(countryISO)
  const country = country_info.country

  const tradeImports = await fetchData(`http://localhost:3000/api/imports_map?iso=${countryISO}`)

  const tradeTrendData = await fetchData(`http://localhost:3000/api/imports_trend?iso=${countryISO}`)

  const importData = await fetchData(`http://localhost:3000/api/commodity_imports?iso=${countryISO}`)

  const productTradeTrend = await fetchData(`http://localhost:3000/api/imports_trend_product?iso=${countryISO}`)

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

        {tradeTrendData && (
          <FoodTrend data={tradeTrendData} countryName={country[0].country} />
        )}

        {importData.length && (
          <FoodImport data={importData} countryName={country[0].country} />
        )}

        {productTradeTrend && (
          <FoodProductTrend
            data={productTradeTrend}
            countryName={country[0].country}
          />
        )}
      </main>
    );
  }
};
