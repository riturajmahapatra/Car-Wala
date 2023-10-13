export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "d4a3c5630fmsh4f98732d7548a33p1d696ejsn78804cb313b3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
