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

// Fetch data function
export async function fetchDataFromJsonFile(fileName) {
  try {
    const filePath = path.join(process.cwd(), 'data', `${fileName}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null; // or handle the error in your preferred way
  }
}

// Filter data by ISO function
export function filterDataByISO(data, isoCode) {
  return data.filter((item) => item.ImporterISO === isoCode);
}

// export async function fetchCountry() {
//   const res = await fetch(`http://localhost:3000/api/country`)

//   const data = await res.json()

//   return(data)
// }

export async function fetchCountry_info(iso) {
  const res = await fetch(`http://localhost:3000/api/country_info?iso=${iso}`)
  const data = await res.json()
  return(data)
}

export async function fetchData(apiUrl) {
  const res = await fetch(apiUrl)
  const data = await res.json()
  return(data)
}