import React from "react";
import hero from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section h-full">
        <img className="z-0" src={hero} alt="hero cover" />
        <div className="rounded-xl m-2 p-2 w-60 z-10 relative  left-3/4 -top-48">
          <p className="font-bold text-3xl text-white max-sm:text-xs">
            24/7 Support
          </p>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
