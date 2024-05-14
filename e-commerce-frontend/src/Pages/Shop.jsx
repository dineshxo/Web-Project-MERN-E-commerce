import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";

import NewCollections from "../Components/NewCollections/NewCollections";
import Banner from "../Components/Banner/Banner";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <NewCollections />
    </div>
  );
};

export default Shop;
