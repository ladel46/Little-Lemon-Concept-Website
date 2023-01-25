import React from "react";
import { StarIcon } from "@chakra-ui/icons";

export default function TestimonialCard(props) {
  return (
    // card for tesmtionials
    <div
      className={`${props.visibality} md:${props.visibalityMd} lg:${props.visibalityLg} xlg:${props.visibalityMd} xl:flex bg-Swhite from-Lyellow relative to-Lgreen  md:flex flex-col flex-wrap border-black w-[300px]  drop-shadow-2xl  rounded-lg h-[300px] md:h-[280px] px-[48px] py-[30px]`}
    >
      <div className="flex flex-row   space-y-2">
        <div className="fixed border-black rounded-lg border-Pyellow border-b-[2px] border-r-[2px] left-[0px] top-[0px] w-[120px]">
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
      <div className="  h-[125px]">
        <p className="fixed left-[10px] font-secondary text-[16px] bottom-[43px] md:bottom-[15px] h-[130px] w-[95%] ">
          {props.review}
        </p>
      </div>
    </div>
  );
}
