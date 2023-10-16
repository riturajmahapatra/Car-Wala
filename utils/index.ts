import { Carprops } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "d4a3c5630fmsh4f98732d7548a33p1d696ejsn78804cb313b3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=2017",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

/* rent calculation */

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 2000; // Base rental price per day in Indian Rupees
  const mileageFactor = 10; // Additional rate per kilometer driven in Indian Rupees
  const ageFactor = 500; // Additional rate per year of vehicle age in Indian Rupees

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0); // Rounding to the nearest rupee
};

export const generateCarImageUrl = (car: Carprops, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("modelYear", `${year}`);
  return `${url}`;
};
