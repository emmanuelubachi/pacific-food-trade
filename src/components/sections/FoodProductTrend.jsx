"use client";

import React, { useEffect, useState } from "react";
import Barchart from "../charts/Barchart";
import { Button, ButtonGroup } from "@nextui-org/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Loading from "../body/Loading";

const FoodProductTrend = ({ data, countryName }) => {
  const [charttype, setCharttype] = useState("line");
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    if (data) {
      setDataset(data);
    }
  }, [data]);

  const handleBarclick = () => {
    setCharttype("bar");
  };

  const handleLineclick = () => {
    setCharttype("line");
  };

  return (
    <section className="bg-gradient-to-b from-white via-pri-13/10 to-white pb-24">
      <div className="m-auto max-w-screen-xl pt-4 px-4">
        <h2
          className="mb-4
          text-xl min-[400px]:text-xl 
          sm:text-2xl lg:text-3xl
          font-bold leading-none tracking-tight 
         text-stone-600"
        >
          Product-Specific Trends
        </h2>
        <p
          className="max-w-7xl
            text-gray-600 font-medium 
            text-xs leading-5 tracking-tight
            sm:text-sm 
            md:leading-7
            lg:text-base
            lg:leading-8
            mb-4"
        >
          Explore the changing landscape of food imports by specific product
          categories. This section provides individual charts for various food
          products, showcasing import trends from 1995 to 2018. Uncover which
          food products have experienced significant shifts in import volumes
          and understand the driving factors..
        </p>

        <ButtonGroup className=" gap-0.5">
          <Button
            onClick={handleBarclick}
            size="sm"
            className="hover:bg-pri-13/40 text-pri-13 focus:ring-black"
          >
            Bar
          </Button>
          <Button
            onClick={handleLineclick}
            size="sm"
            className="hover:bg-pri-1/50 text-pri-1"
          >
            Line
          </Button>
        </ButtonGroup>

        <div
          className="my-8 gap-4 items-center
            justify-center
            mx-auto
            md:grid md:grid-cols-2
            xl:gap-16"
        >
          {dataset.map((items, index) => (
            <div key={index}>
              <p className="font-medium  text-pri-1">{items.Commodity}</p>
              {dataset.length == 0 ? (
                <Loading />
              ) : (
                <Barchart
                  name={items.Food}
                  data={items.Data}
                  chartType={charttype}
                />
              )}
            </div>
          ))}
        </div>
        {/* <div className=" ">
          <div>
            {data.map((items, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={index + 1}>
                  <AccordionTrigger>{items.Commodity}</AccordionTrigger>
                  <AccordionContent>
                    <Barchart name={items.Food} data={items.Data} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FoodProductTrend;
