import React from "react";

export default function HightledCard(props) {
  return (
    <div className=" bg-Swhite border-[px] flex flex-col border-black   drop-shadow-xl  rounded-md h-[490px] px-[48px] py-[20px]  ">
      <div className="border-Pyellow w-[310px] h-[210px] overflow-hidden mx-auto border-[7px]  rounded-md ">
        <img src={props.dishImage} width="310px" alt="" />
      </div>
      <div className="flex flex-row  space-x-[120px]">
        <h1 className="text-start font-primary w-[130px] text-[26px] mt-2 text-Pgreen">
          {props.dishName}
        </h1>
        <h1 className="text-start font-primary text-[30px] mt-2 text-Pgreen">
          {props.dishPrice}$
        </h1>
      </div>

      <p className="font-secondary h-[100px] text-Sgray w-[300px]">
        {props.dishDescription}
      </p>
      <div className=" mx-auto mt-[40px]">
        <a
          href="#"
          className="py-3 px-10 rounded-full font-primary text-[20px]  bg-Pyellow hover:bg-Pgreen hover:text-Swhite"
        >
          Order for dilvery
        </a>
      </div>
    </div>
  );
}
