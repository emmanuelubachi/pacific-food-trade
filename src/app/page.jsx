import React from "react";
import SimpleBarchart from "@/components/charts/SimpleBarchart";
import TopFoods from "@/components/sections/TopFoods";
import CountrySelector from "./components/CountrySelector";

const FeedingThePacific = () => {
  return (
    <>
      <header>
        <section className="bg-gradient-to-br min-h-screen from-orange-100 to-orange-50 py-48">
          <div className="m-auto flex flex-col items-center justify-center space-y-10">
            <h1
              className="mb-4 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold leading-none tracking-tight 
            text-stone-600 "
            >
              Feeding the Pacific
            </h1>
            <CountrySelector />
          </div>
        </section>
      </header>
    </>
  );
};

export default FeedingThePacific;
