import React from "react";
import Spinner from "./Spinner";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function Availbitiy(props) {
  const [spin, setSpin] = React.useState(false);
  const [unAvailable, setUnAvailable] = React.useState(false);
  // useEffect that check for avalbility whenever the date, time or seats variables change
  React.useEffect(() => {
    if (
      props.time == "" ||
      props.time == "-Please select a time-" ||
      props.date == "" ||
      props.date == "Invalid date"
    ) {
      setSpin(false);
    } else {
      setSpin(true);
      setTimeout(() => {
        setSpin(false);
        if (
          props.seats > 4 &&
          (props.time == "21:00" ||
            props.time == "22:00" ||
            props.time == "20:00")
        ) {
          setUnAvailable(true);
          props.setAvailable(false);
        } else {
          props.setAvailable(true);
          setUnAvailable(false);
        }
      }, 1000);
    }
  }, [props.date, props.time, props.seats]);
  return (
    <div>
      {/* spinning indicator */}
      {spin && <Spinner></Spinner>}
      {/* displays not availble when table not available */}
      {unAvailable && (
        <div className="flex mt-[20px] flex-row justify-center items-center space-x-[10px]">
          <h2 className="text-[30px] sm:text-[30px] text-center text-red-500 font-bold font-primary ">
            Not avaiable
          </h2>
          <CloseIcon color={"red"}></CloseIcon>
        </div>
      )}
      {/* displays  availble when table  available */}

      {props.available && (
        <div className="flex mt-[20px] flex-row justify-center items-center space-x-[10px]">
          <h2 className="text-[30px] sm:text-[30px] text-center text-Pgreen font-bold font-primary ">
            Avaiable
          </h2>
          <CheckIcon color={"#495E57"}></CheckIcon>
        </div>
      )}
    </div>
  );
}
