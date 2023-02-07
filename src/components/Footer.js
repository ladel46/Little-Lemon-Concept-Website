import React from "react";
import Logo1 from "./imgs/Logo.svg";
import Logo2 from "./imgs/WhiteLogo.jpg";
import FooterElement from "./FooterElement";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    // section for the footer section of the site
    <footer>
      {/* flex container for footer element rows */}
      <div className="flex flex-col md:flex-row py-[15px] md:pt-[40px] items-center justify-around bg-Pgreen w-full space-y-[10px] md:space-y-0">
        <button
          onClick={() => {
            navigate("Little-Lemon-Concept-Website/");
          }}
        >
          <img src={Logo2} width={"100px"} alt="" />
        </button>
        <div className="flex flex-row md:flex-col  mt-[40px] space-x-[10px] md:space-x-0">
          <button
            onClick={() => {
              navigate("Little-Lemon-Concept-Website/");
            }}
          >
            <FooterElement Element={"Home"}></FooterElement>
          </button>
          <button>
            <FooterElement Element={"About"}></FooterElement>
          </button>
          <button>
            <FooterElement Element={"Menu"}></FooterElement>
          </button>

          <button
            onClick={() => {
              navigate("/Little-Lemon-Concept-Website/booking");
            }}
          >
            <FooterElement Element={"Reservation"}></FooterElement>
          </button>

          <button>
            <FooterElement Element={"Order"}></FooterElement>
          </button>

          <button>
            <FooterElement Element={"Login"}></FooterElement>
          </button>
        </div>
        <h4 className=" text-start md:hidden  right-[30px] font-primary   mb-[10px] text-Swhite text-[25px] ">
          Contact Us
        </h4>
        {/* flex container for footer element columns */}
        <div className="flex flex-row md:flex-col -mt-[50px] space-x-[10px] md:space-x-0">
          <h4 className="hidden md:block text-start   right-[30px] font-primary  -mt-[10px] mb-[10px] text-Swhite text-[25px] ">
            Contact Us
          </h4>
          <FooterElement Element={"Adress"}></FooterElement>
          <FooterElement Element={"Phone Number"}></FooterElement>
          <FooterElement Element={"Email"}></FooterElement>
        </div>
        <h4 className=" md:hidden text-start md:block  right-[30px] font-primary  -mt-[10px] mb-[10px] text-Swhite text-[25px] ">
          Social Medias
        </h4>
        <div className="flex flex-row md:flex-col -mt-[50px] space-x-[10px] md:space-x-0">
          <h4 className=" hidden text-start md:block  right-[30px] font-primary  -mt-[10px] mb-[10px] text-Swhite text-[25px] ">
            Social Medias
          </h4>
          <FooterElement Element={"Instagram"}></FooterElement>
          <FooterElement Element={"Facebook"}></FooterElement>
          <FooterElement Element={"Twitter"}></FooterElement>
        </div>
      </div>
    </footer>
  );
}
