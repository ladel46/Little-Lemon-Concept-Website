import { findByLabelText } from "@testing-library/react";
import React from "react";
import Lemon from "./imgs/Lemon4.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    // Hero section
    <section id="hero">
      {/* flex container for hero section */}
      <div className="  flex relative  overflow-hidden  relative w-full justify-around  -space-y-[10px]  h-[880px] bg-Pgreen xlg:-space-x-[350px]  xl:-space-x-[700px]">
        <div className="flex flex-col items-center  relative md:items-end md:ml-[100px] ">
          <h1 className="text-[60px] sm:text-[80px] text-Pyellow font-primary ">
            Little Lemon
          </h1>
          <h2 className="text-[40px] sm:text-[50px] -mt-[30px] sm:-mt-[50px] text-Pyellow font-primary text-end  ">
            Chicago
          </h2>
          <div className="md:mt-5">
            <p className="text-Swhite text-center md:text-start w-[320px] sm:w-[350px] font-secondary text-[20px] text-medium mt">
              Located in London, little lemon provides you with the most you
              with the best dishes around the world, with the option to order
              online or reserve a table Little lemon is the best place for your
              most delicious needs!
            </p>
            <div className="flex mt-[40px] justify-center md:justify-start md:mt-[60px]">
              <button
                onClick={() => {
                  navigate("/booking");
                }}
                className="py-3 px-10 rounded-full font-primary text-[20px]  bg-Pyellow hover:bg-Sorange hover:text-Swhite"
              >
                Reserve a table
              </button>
            </div>
          </div>
        </div>
        {/* spinning lemon picture */}
        <div className="flex flex-col hidden md:justify-center md: md:block  ">
          <img
            src={Lemon}
            className={
              "md:mt-[100px] lg:mt-[60px] md:min-w-[450px] lg:min-w-[600px] md:w-[500px] lg:w-[600px] xl:w-[800px] xl:mt-0"
            }
          />
        </div>
      </div>
    </section>
  );
}
