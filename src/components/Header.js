import React from "react";
import Logo from "./imgs/Logo.svg";
import Humburger from "./imgs/🦆 icon _hamburger menu_.svg";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const HandleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      {/* flex container for header */}
      <div className=" container relative z-10 bg-white md:justify-around px-4 md:px-0 w-[95vw]  py-3 flex  mx-auto">
        {/* logo */}
        <img width={"150px"} src={Logo} />
        <Navbar></Navbar>

        <button
          id="menu-btn"
          onClick={HandleClick}
          className={`${
            showMenu ? "open" : null
          } block hamburger absolute top-[25px] right-[25px] md:hidden`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
          {/* <img
            width={"20px"}
            src={Humburger}
            className={"absolute top-[25px] right-[25px] "}
          /> */}
        </button>
        {/* Mobile menu*/}
        <AnimatePresence mode="wait">
          {showMenu ? <MobileMenu></MobileMenu> : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
