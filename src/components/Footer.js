import React from "react";
import Logo1 from "./imgs/Logo.svg";
import Logo2 from "./imgs/WhiteLogo.jpg";
import FooterElement from "./imgs/FooterElement";
export default function Footer() {
  return (
    // section for the footer section of the site
    <footer>
      {/* flex container for footer element rows */}
      <flex className="flex flex-row py-[15px] items-center justify-around bg-Pgreen w-[100%]">
        <img src={Logo2} width={"100px"} alt="" />
        <flex className="flex flex-col mt-[40px]">
          <FooterElement Element={"Home"}></FooterElement>
          <FooterElement Element={"About"}></FooterElement>
          <FooterElement Element={"Menu"}></FooterElement>
          <FooterElement Element={"Reservation"}></FooterElement>
          <FooterElement Element={"Order"}></FooterElement>
          <FooterElement Element={"Login"}></FooterElement>
        </flex>
        {/* flex container for footer element columns */}
        <flex className="flex flex-col -mt-[50px]">
          <h4 className=" text-start  underline right-[30px] font-primary  -mt-[10px] mb-[10px] text-Pyellow text-[25px] ">
            Contact Us
          </h4>
          <FooterElement Element={"Adress"}></FooterElement>
          <FooterElement Element={"Phone Number"}></FooterElement>
          <FooterElement Element={"Email"}></FooterElement>
        </flex>
        <flex className="flex flex-col -mt-[50px]">
          <h4 className=" text-start  underline right-[30px] font-primary  -mt-[10px] mb-[10px] text-Pyellow text-[25px] ">
            Social Medias
          </h4>
          <FooterElement Element={"Instagram"}></FooterElement>
          <FooterElement Element={"Facebook"}></FooterElement>
          <FooterElement Element={"Twitter"}></FooterElement>
        </flex>
      </flex>
    </footer>
  );
}
