"use client";

import React, { useState } from "react";
import Treemap from "@/components/charts/Treemap";
import { ComboboxDemo } from "@/components/ui/Combobox";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TopFoods = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("2018" || "");

  // const [tradeflow, setTradeflow] = useState("export" || "");
  // const [open, setOpen] = React.useState(false);

  const handleSelectValue = (currentValue) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
  };

  const foodData = data;
  //console.log(value);

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

  const tradeflows = [
    {
      value: "export",
      label: "Export",
    },
    {
      value: "import",
      label: "Import",
    },
  ];

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

          <div className=" ">
            <div className="flex gap-2 justify-end">
              {/* <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between hover:bg-white/60"
                  >
                    {tradeflows
                      ? tradeflows.find((option) => option.value === tradeflow)
                          ?.label
                      : "Export"}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 border-white/20 bg-stone-50">
                  <Command className="bg-white/40">
                    <CommandEmpty>No option found.</CommandEmpty>
                    <CommandGroup>
                      {tradeflows.map((option) => (
                        <CommandItem
                          className="aria-selected:bg-stone-200"
                          key={option.value}
                          onSelect={(currentValue) => {
                            setTradeflow(
                              currentValue === tradeflow ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {option.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              tradeflow === option.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover> */}
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

            <Treemap data={foodData.Data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFoods;
