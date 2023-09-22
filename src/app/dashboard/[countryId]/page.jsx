import React from "react";
import TopFoods from "@/components/sections/TopFoods";
import TopFoodData from "@/data/food_trade_by_year.json";

const CountryPage = ({ params }) => {
  const countryISO = params.countryId;

  const data = TopFoodData.filter((foodData) => foodData.iso3 === countryISO);

  if (data.length === 0) {
    // Handle the case where no matching data is found, e.g., show an error message.
    return (
      <main>
        <p>No data found for the specified country.</p>
      </main>
    );
  }

  return (
    <main>
      <TopFoods data={data} />
    </main>
  );
};

export default CountryPage;
