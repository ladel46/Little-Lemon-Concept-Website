import { findByLabelText } from "@testing-library/react";
import React from "react";
import Lemon from "./imgs/Lemon4.png";

export default function Hero() {
  return (
    // Hero section
    <section id="hero">
      {/* flex container for hero section */}
      <div className="  flex relative flex-wrap overflow-hidden relative w-full justify-around  -space-y-[10px]  h-[880px] bg-Pgreen sm:-space-x-[100px] lg:-space-x-[700px]">
        <div className="flex flex-col  ml-[100px] ">
          <h1 className="text-[80px] text-Pyellow font-primary ">
            Little Lemon
          </h1>
          <h2 className="text-[50px] -mt-[50px] text-Pyellow font-primary text-end  ">
            Chicago
          </h2>
          <div className="mt-5">
            <p className="text-Swhite  w-[350px] font-secondary text-[20px] text-medium mt">
              Located in London, little lemon provides you with the most you
              with the best dishes around the world, with the option to order
              online or reserve a table Little lemon is the best place for your
              most delicious needs!
            </p>
            <div className=" mt-[70px]">
              <a
                href="#"
                className="py-3 px-10 rounded-full font-primary text-[20px]  bg-Pyellow hover:bg-Sorange hover:text-Swhite"
              >
                Reserve a table
              </a>
            </div>
          </div>
        </div>
        {/* spinning lemon picture */}
        <div className=" ">
          <img src={Lemon} width={"800px"} />
        </div>
      </div>
    </section>
  );
}
