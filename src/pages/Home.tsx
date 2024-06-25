import React from "react";

import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import Banner from "../components/Banner";
import News from "../components/News";
import ProductPage from "./ProductPage";

const Home = () => {
  return (
  
  <div className="overflow-x-hidden">

        <Hero />

        <ProductPage />

        <Banner />
        <Team />
        <Sponsors />
        <News />
  </div>      
  );
};

export default Home;
