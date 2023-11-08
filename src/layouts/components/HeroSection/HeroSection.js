import React from "react";

import slider1 from "../../../assets/images/slider1.jpg";
import Image from "../../../components/Image/Image";

const HeroSection = () => {
  return (
    <div className="relative xl:mx-80">
      <Image
        className="w-full h-auto xl:h-[700px] object-cover"
        src={slider1}
        loading="lazy"
        alt="hero section"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000004d]"></div>
      <div className="absolute max-w-[220px] xl:max-w-[500px] top-2 xl:top-14  left-0 xl:left-14">
        <h1 className="text-xl xl:text-6xl font-bold text-white leading-[1.15] ml-3 xl:ml-8">
          Dream Your Fashion, Live Your Passion
        </h1>
        <p className="ml-3 xl:ml-8 text-white text-xs xl:text-base font-light max-w-[500px] leading-4 xl:leading-6 italic my-2">
          "Step into a world where style meets substance. Discover exquisite
          designs tailored for the modern trendsetter. Embrace the elegance of
          fashion redefined."
        </p>
        <div className="flex items-center justify-center">
          <button className="ml-5 xl:ml-8 mt-5 xl:mt-10 border-black border-[1px] bg-white px-3 py-2 xl:px-6 xl:py-4 text-lg xl:text-2xl font-semibold hover:bg-shadow">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
