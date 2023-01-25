import React from "react";
import { motion } from "framer-motion";

export default function MobileMenu() {
  return (
    <motion.div
      key="Modal"
      initial={{ scale: 0.7, opacity: 0, x: 0, y: "-50%" }}
      animate={{ scale: 1, opacity: 1, x: 1, y: 0 }}
      exit={{
        scale: 0.7,
        opacity: 0,
        y: "-50%",
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.4 }}
      ease="easeOut"
    >
      <div>
        <nav className=" absolute container  text-Pgreen bg-white items-center z-10 text-xxl drop-shadow-xl md:hidden font-primary font-bold flex flex-col mx-auto  py-4 mt-[53px] space-y-5 w-[55vw] ">
          <a href="#" className={"hover:text-Sbage"}>
            Home
          </a>
          <a href="#" className={"hover:text-Sbage "}>
            About
          </a>
          <a href="#" className={"hover:text-Sbage "}>
            Menu
          </a>
          <a href="#" className={"hover:text-Sbage "}>
            Reservation
          </a>
          <a href="#" className={"hover:text-Sbage "}>
            Order
          </a>
          <a href="#" className={"hover:text-Sbage "}>
            Login
          </a>
        </nav>
      </div>
    </motion.div>
  );
}
