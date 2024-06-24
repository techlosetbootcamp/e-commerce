import React from "react";

import CategoryList from "./CategoryList";
import Hero from "./Hero";
import Sponsors from "./Sponsors";
import Team from "./Team";
import Banner from "./Banner";
import News from "./News";
import ProductPage from "./ProductPage";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />

        <ProductPage />

        <Banner />
        <Team />
        <Sponsors />
        <News />
      </div>
    </>
  );
};

export default Home;
