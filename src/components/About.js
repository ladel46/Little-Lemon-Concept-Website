import React from "react";
import AboutImage from "./imgs/AboutImage.png";

export default function About() {
  return (
    <section id="about">
      <div className="flex  py-[80px] flew-row justify-around container mx-auto">
        <div className="flex flex-col  ml-[100px] ">
          <h1 className="text-[90px]  text-Pyellow font-primary ">
            Little Lemon
          </h1>
          <h2 className="text-[60px] -mt-[50px] text-Pyellow font-primary text-end  ">
            Chicago
          </h2>
          <div className="mt-5">
            <p className="text-Sgray  w-[350px] font-secondary text-[23px] text-medium mt">
              Located in London, little lemon provides you with with the best
              dishes around the world.Have relative birthday that you want to
              celebrate? do you want to experience food like you never did
              before? reserve a table now, or order online. Little lemon is the
              best place for your most delicious needs!
            </p>
          </div>
        </div>
        <div className="relative flex-flex-col">
          <img src={AboutImage} width={"500px"} alt="" />
        </div>
      </div>
    </section>
  );
}
