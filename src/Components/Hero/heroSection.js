import React from "react";
import hero from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <>
      <div class="hero-section h-full">
        <img className="z-0" src={hero} alt="hero cover" />
        <div>
          <button className="font-bold text-3xl bg-orange-400 rounded-xl p-2 m-2 z-10 absolute top-full left-1/2 -translate-y-2/4 -translate-x-2/4">
            Products
          </button>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
