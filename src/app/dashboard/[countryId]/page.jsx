import React from "react";
//import SimpleBarchart from "@/components/charts/SimpleBarchart";
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

// <main>
//   <section className="bg-gradient-to-tr from-orange-100 to-orange-50 pb-24">
//     <div className="m-auto max-w-screen-xl pt-4 px-4">
//       <h2
//         className="mb-8
//   text-2xl sm:text-3xl md:text-4xl lg:text-5xl
//   font-bold leading-none tracking-tight
//   text-stone-600 "
//       >
//         Where does the food come from?
//       </h2>

//       <div
//         className="gap-8 items-center
//     justify-center
//   mx-auto
//   md:grid md:grid-cols-2
//   xl:gap-16"
//       >
//         <div>
//           <p className="mb-3 text-lg text-stone-500 md:text-xl">
//             Deliver great service experiences fast - without the complexity
//             of traditional ITSM solutions.Accelerate critical development
//             work and deploy.
//           </p>
//           <p className="text-stone-500">
//             Track work across the enterprise through an open, collaborative
//             platform. Link issues across Jira and ingest data from other
//             software development tools, so your IT support and operations
//             teams have richer contextual information to rapidly respond to
//             requests, incidents, and changes.
//           </p>
//         </div>
//         <div className=" ">
//           <SimpleBarchart />
//         </div>
//       </div>
//     </div>
//   </section>
//   <TopFoods />
// </main>
