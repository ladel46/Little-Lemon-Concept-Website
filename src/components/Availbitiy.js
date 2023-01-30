import React from "react";
import Spinner from "./Spinner";

export default function Availbitiy(props) {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let spin = "hidden";
  let availbity = (date, time) => {
    if (date == "" || date == "-Please select a time-" || time == "") {
      spin = "hidden";
    } else {
      spin = "block";
      console.log(spin);
    }
  };
  return (
    <div>
      {availbity(props.date, props.time)}
      <Spinner display={spin}></Spinner>
    </div>
  );
}
