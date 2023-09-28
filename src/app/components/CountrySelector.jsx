"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CountryData from "@/data/pacific_country.json";
import { CaretSortIcon } from "@radix-ui/react-icons";

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
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter(); // Get the router instance

  const handleSelectValue = (currentValue) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);

    // Route the user to a page based on the selected value
    if (currentValue) {
      router.push(`/dashboard/${currentValue}`);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[700px] py-8 justify-between rounded-none
          lg:max-w-xl lg:text-xl
          md:max-w-md md:text-lg
          sm:max-w-sm sm:text-md
          max-w-xs text-sm font-medium
        text-stone-800 
          bg-transparent hover:bg-white/20
          border-0 border-b border-stone-400 
         "
        >
          {value
            ? CountryData.find((countries) => countries.iso3 === value)?.country
            : "Select a Country or Territory..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[700px] p-0 bg-white/20
      lg:max-w-xl lg:text-xl
      md:max-w-md md:text-lg
      sm:max-w-sm sm:text-md
      max-w-xs"
      >
        <Command>
          <div className="hidden sm:block">
            <CommandInput placeholder="Search framework..." className="h-9" />
          </div>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-72 rounded-md">
              {CountryData.map((countries) => (
                <CommandItem
                  key={countries.id}
                  onSelect={() => handleSelectValue(countries.iso3)}
                >
                  {countries.country}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
