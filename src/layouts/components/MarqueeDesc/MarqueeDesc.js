import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMegaphoneFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";

const MarqueeDesc = () => {
  return (
    <div className="h-10 xl:h-16 w-full bg-primary flex justify-center items-center leading-10 xl:leading-[64px] font-semibold">
      <Marquee
        speed={50}
        gradientColor="#ccc"
        gradient
        gradientWidth={50}
        pauseOnHover
      >
        <RiMegaphoneFill className="xl:w-8 xl:h-8 text-red-700" />
        <p className="px-6 xl:px-2 text-red-700 text-xs xl:text-base">
          Exclusive Summer Sale: Dive into Fashion with 50% Off Your Favorite
          Styles. Limited Time Offer! Explore Now for Trendy Outfits and
          Unbeatable Discounts.
        </p>
        <BsFillTelephoneFill className="xl:w-5 xl:h-5" />
        <p className="pl-1 italic underline decoration-[3px] decoration-red-700">
          +84 328 977 436.
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeDesc;
