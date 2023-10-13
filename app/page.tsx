import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="my-12 w-full padding-x padding-y" id="discover">
        <div className="home__text-container ">
          <h1 className="text-4xl font-extrabold">Car Catelogue</h1>
          <p>Explore the variety by your taste</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
