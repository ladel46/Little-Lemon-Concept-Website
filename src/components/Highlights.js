import React from "react";
import HightledCard from "./HightledCard";
import { HightledDishes } from "./HighltedDishes";

export default function Highlights() {
  return (
    <section id="highlights">
      {/*  container for highlights section */}
      <div className=" relative  flex flex-col justify-around -space-y-[110px] items-center -left-[3px]  w-[99.5vw]  bg-[url('https://img.freepik.com/free-vector/yellow-lemon-background_53876-93597.jpg?w=2000')] rounded-full -mt-[350px]  h-[650px]  ">
        <h1 className="-mt-[60px] text-start block font-primary text-[60px]  text-Pgreen ">
          Specials
        </h1>
        {/* flex container for dishes cards */}
        <div className="flex flex-row w-[81vw] h-[520px] overflow-y-hidden mx-auto  space-x-[100px] ">
          {/* cards for highlted dishes  */}
          {HightledDishes.map((dish, index) => {
            return (
              <HightledCard
                key={index}
                dishName={dish.Name}
                dishImage={dish.Image}
                dishPrice={dish.Price}
                dishDescription={dish.Description}
              ></HightledCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
