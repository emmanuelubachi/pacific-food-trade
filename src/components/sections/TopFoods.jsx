"use client";

import React, { useEffect, useState } from "react";
import Treemap from "@/components/charts/Treemap";
import { ComboboxDemo } from "@/components/ui/Combobox";

const TopFoods = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("2018");
  const [selectedData, setSelectedData] = useState(null);

  const Year = [
    {
      value: "2018",
      label: "2018",
    },
    {
      value: "2017",
      label: "2017",
    },
    {
      value: "2016",
      label: "2016",
    },
    {
      value: "2015",
      label: "2015",
    },
  ];

  useEffect(() => {
    // Use the data passed as props to filter and select the object with the chosen year.
    const selectedYear = parseInt(value);
    const selectedObject = data.find((item) => item.Year === selectedYear);

    setSelectedData(selectedObject);
  }, [value, data]);

  const handleSelectValue = (currentValue) => {
    setValue(currentValue);
    setOpen(false);
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-24">
      <div className="m-auto max-w-screen-xl pt-4 px-4">
        <h2
          className="mb-8 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold leading-none tracking-tight 
            text-stone-600 "
        >
          Where does the food come from?
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
            <p className="text-stone-500">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </div>

          <div className=" sm:h-full min-h-screen ">
            <div className="flex gap-2 justify-end">
              <ComboboxDemo
                options={Year}
                defaultValue={"2018"}
                defaultLabel={"2018"}
                handleSelectValue={handleSelectValue}
                setOpen={setOpen}
                value={value}
                open={open}
              />
            </div>
            {/* Display the selectedData in Treemap */}
            {selectedData && <Treemap data={selectedData.Data} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFoods;
