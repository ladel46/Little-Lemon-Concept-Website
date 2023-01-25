import React from "react";
import AboutImage from "./imgs/AboutImage.png";
import Food from "./imgs/Food.jpg";

export default function About() {
  return (
    // section for About part of the website
    <section id="about">
      {/* flex box for the about secion */}
      <div className="flex w-[100vw] py-[40px] md:py-[80px]  flex-col md:flex-row justify-around items-center container mx-auto">
        {/* div container for the resturant name and info */}
        <div className="  flex flex-col items-center  md:w-auto xl:ml-[100px] ">
          <h1 className="text-[70px] md:text-[90px] xl:text-[100px] text-Pyellow font-primary ">
            Little Lemon
          </h1>
          <h2 className="text-[60px]  -mt-[50px] xl:text-[70px] text-Pyellow font-primary text-center md:text-end  ">
            Chicago
          </h2>
          <div className="  flex w-[320px] border-Pyellow border-[4px] lg:hidden">
            <img src={Food} width={"320px"} alt="" />
          </div>
          <div className=" flex flex-col items-center mt-5">
            <p className="text-Sgray w-[90%] lg:w-[350px] xl:text-[25px] font-secondary text-[23px] text-center lg:text-start  text-medium ">
              Located in London, little lemon provides you with with the best
              dishes around the world.Have relative birthday that you want to
              celebrate? do you want to experience food like you never did
              before? reserve a table now, or order online. Little lemon is the
              best place for your most delicious needs!
            </p>
          </div>
        </div>
        {/* div for images */}
        <div className="relative hidden lg:flex">
          <img
            src={AboutImage}
            className={"lg:w-[450px] xl:w-[520px]"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
