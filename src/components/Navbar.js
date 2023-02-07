import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    // navbar menu
    <nav className="hidden  text-Pgreen  items-center   text-xxl  font-primary font-bold md:flex md:space-x-10 lg:space-x-20 ">
      <button
        onClick={() => {
          navigate("/Little-Lemon-Concept-Website");
        }}
        className={"hover:text-Sbage"}
      >
        Home
      </button>
      <button className={"hover:text-Sbage "}>About</button>
      <button className={"hover:text-Sbage "}>Menu</button>
      <button
        onClick={() => {
          navigate("/Little-Lemon-Concept-Website/booking");
        }}
        className={"hover:text-Sbage "}
      >
        Reservation
      </button>
      <button className={"hover:text-Sbage "}>Order</button>
      <button className={"hover:text-Sbage "}>Login</button>
    </nav>
  );
}
