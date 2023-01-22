import React from "react";
import Logo from "./imgs/Logo.svg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      {/* flex container for header */}
      <div className=" container justify-around   py-3 flex  mx-auto">
        {/* logo */}
        <img width={"150px"} src={Logo} />
        <Navbar></Navbar>
      </div>
    </header>
  );
}
