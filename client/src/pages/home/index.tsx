import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import FilterArea from "./FilterArea";
import Filter from "../../components/filter";
import List from "../../components/list";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        <FilterArea open={() => setIsOpen(true)} />
        <List />
      </div>

      <div className="flex lg:hidden">
        {isOpen && <Filter close={() => setIsOpen(false)} isOpen={isOpen} />}
      </div>
    </div>
  );
};

export default Home;
