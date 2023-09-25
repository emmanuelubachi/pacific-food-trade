import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getTop4YearsWithLabels(data) {
  // First, extract the unique years from the data
  const uniqueYears = [...new Set(data.map((item) => item.Year))];

  // Sort the unique years in descending order
  uniqueYears.sort((a, b) => b - a);

  // Take the top 4 years (if available)
  const top4Years = uniqueYears.slice(0, 5);

  // Map the top 4 years to the desired format
  const top4YearsWithLabels = top4Years.map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));

  return top4YearsWithLabels;
}
