import React from "react";
import Harely from "./imgs/Harely.JPG";
import { StarIcon } from "@chakra-ui/icons";

export default function TestimonialCard(props) {
  return (
    // card for tesmtionials
    <div className=" bg-Swhite from-Lyellow relative to-Lgreen border-[1px] flex flex-col flex-wrap border-black w-[270px]  drop-shadow-2xl  rounded-lg h-[280px] px-[48px] py-[20px]  ">
      <div className="flex flex-row  space-y-2">
        <div className="fixed border-black rounded-lg border-b-[2px] border-r-[2px] left-[0px] top-[0px] w-[120px]">
          <img className={"rounded-lg"} src={props.Image} />
        </div>
        <div className=" fixed w-[50%]  top-[15px] right-[1px] flex flex-col">
          <h3 className="font-primary text-center text-[26px] text-Pgreen">
            {props.Name}
          </h3>
          <div className="flex flex-row justify-center items-center space-x-1">
            <StarIcon color={props.star1}></StarIcon>
            <StarIcon color={props.star2}></StarIcon>
            <StarIcon color={props.star3}></StarIcon>
            <StarIcon color={props.star4}></StarIcon>
            <StarIcon color={props.star5}></StarIcon>
          </div>
        </div>
      </div>
      <div className="container mx-auto fixed  left-[10px] bottom-0 h-[125px]">
        <p className="fixed left-[10px] font-secondary text-[16px]  bottom-[25px] h-[125px] w-[250px]">
          {props.review}
        </p>
      </div>
    </div>
  );
}
