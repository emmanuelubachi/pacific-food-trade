"use client";

import React, { useEffect, useState } from "react";
import DoubleBarchart from "../charts/DoubleBarchart";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FoodProductTrend = ({ data }) => {
  return (
    <section className="bg-white pb-24">
      <div className="m-auto max-w-screen-xl pt-4 px-4">
        <h2
          className="mb-8 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold leading-none tracking-tight 
            text-stone-600 "
        >
          Product-Specific Trends
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
          </div>

          <div className=" ">
            <div className="">
              {data.map((items, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={index + 1}>
                    <AccordionTrigger>{items.Food}</AccordionTrigger>
                    <AccordionContent>
                      <DoubleBarchart name={items.Food} data={items.Data} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodProductTrend;
