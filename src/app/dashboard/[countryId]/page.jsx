import React from "react";
import TopFoods from "@/components/sections/TopFoods";
import TopFoodData from "@/data/food_trade.json";

const CountryPage = ({ params }) => {
  const countryISO = params.countryId;

  const data = TopFoodData.filter((foodData) => foodData.iso3 === countryISO);

  return (
    <main>
      <TopFoods data={data} />
    </main>
  );
};

export default CountryPage;
