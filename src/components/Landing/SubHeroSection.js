import React from "react";
import {
  HeroSectionSvg,
  HeroSectionSvg1,
  HeroSectionSvg2,
} from "../Formcomponent/LandingPageSvg";

export const SubHeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row mt-4">
      <div className="w-full h-auto  flex flex-col md:flex-row mt-8 bg-gradient-to-r from-white to-white via-yellow-100 via-pink-100 rounded ">
      <div className="w-full h-full  flex items-center justify-center ">
  <div className="">
    <span className="font-medium md:text-4xl text-2xl text-black text-center">
      Welcome to{" "}
      <span className="font-bold md:text-4xl text-2xl text-purple-500">
        AI Resume <br /> Maker!{" "}
        <span className="font-medium md:text-4xl text-2xl text-black">
          Your path to
        </span>{" "}
        <br />{" "}
        <span className="font-medium md:text-4xl text-2xl text-black">
          professional success!
        </span>
      </span>
    </span>
  </div>
</div>

        <div className="flex flex-row align-right relative basis-1/2 mt-2">
          <div className="z-10   " style={{ zIndex: "0" }}>
            <HeroSectionSvg1 />
            <HeroSectionSvg2 />
          </div>
          <div
            className="relative"
            style={{ marginLeft: "-100px", zIndex: "1" }}
          >
            <HeroSectionSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
