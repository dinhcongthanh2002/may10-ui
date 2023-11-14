import React from "react";

import HeroSection from "../../layouts/components/HeroSection/HeroSection";
import Products from "../../layouts/components/Products/Products";
import MarqueeDesc from "../../layouts/components/MarqueeDesc/MarqueeDesc";
import FacebookChat from "../../layouts/components/FacebookChat/FacebookChat";
// import FloatingContact from "../../layouts/components/FloatingContact/FloatingContact";
const Home = () => {
  return (
    <div>
      <div>
        {/* text marquee */}
        <MarqueeDesc />
        {/* slider */}
        <HeroSection />
        {/* products */}
        <Products title="Men's Clothing" params="men's clothing" link="men" />
        <Products
          title="Women's Clothing"
          params="women's clothing"
          link="women"
        />
        <Products title="Jewelery" params="jewelery" link="jewelery" />
        <Products title="Electronics" params="electronics" link="electronics" />
      </div>
      <FacebookChat />
    </div>
  );
};

export default Home;
