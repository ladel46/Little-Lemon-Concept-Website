import React from "react";

export default function Navbar() {
  return (
    // navbar menu
    <nav className="hidden  text-Pgreen  items-center   text-xxl  font-primary font-medium md:flex md:space-x-10 lg:space-x-20 ">
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
  );
}
