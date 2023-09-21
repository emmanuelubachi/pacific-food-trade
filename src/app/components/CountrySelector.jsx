"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

const countries = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter(); // Get the router instance

  const handleSelectFramework = (currentValue) => {
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
          className="w-full py-10 justify-between
          lg:max-w-xl lg:text-xl
          md:max-w-md md:text-lg
          sm:max-w-sm sm:text-md
          max-w-xs text-sm font-light
        text-stone-800 
          bg-transparent hover:bg-white/20
          border-0 border-b-2 border-gray-300 appearance-none 
         "
        >
          {value
            ? countries.find((framework) => framework.value === value)?.label
            : "Select a Country or Territory..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full max-w-xl p-0 bg-white/20
        lg:max-w-xl lg:text-xl
        md:max-w-md md:text-lg
        sm:max-w-sm sm:text-md"
      >
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {countries.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={() => handleSelectFramework(framework.value)}
              >
                {framework.label}
                {/* <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                /> */}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
