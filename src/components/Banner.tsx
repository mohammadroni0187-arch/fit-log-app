
import Image from "next/image";
import React from "react";
import hero from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-black px-6 pt-12">
      <div className="hero bg-[#111111] rounded-4xl min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row justify-between gap-30 w-full">


          <div className="w-1/2">
            <h4 className="font-bold text-[#ccff00]">
              WORKOUT LIBRARY
            </h4>

            <h1 className="text-5xl text-white font-bold">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h1>

            <p className="py-6 text-gray-300">FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it <br /> into today's plan, and watch the week's work add up.</p>

            <a href="#library" className="btn bg-[#ccff00] text-black border-none">
              BROWSE WORKOUTS
            </a>

            
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src={hero} alt="Banner Image"
          /></div>

        </div>
      </div>
    </div>
  );
};

export default Banner;



