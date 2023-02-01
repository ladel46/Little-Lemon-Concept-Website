import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import ResponsiveTable from "../ResponsiveTable";
import moment from "moment";
import Availbitiy from "../Availbitiy";
import Form from "../Form";
// booking a table page
export default function Booking() {
  const [available, setAvailable] = React.useState(false);
  const myRef = React.useRef(null);
  // times of reservation
  const [times] = React.useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [seats, setSeats] = React.useState(1);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const animation = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    exit: { scaleX: 0 },
    transition: { duration: 0.5 },
  };
  // function to reduce number of seats needed
  const Reduce = () => {
    if (seats > 1) {
      setSeats(seats - 1);
    }
  };
  // function to increase number of seats needed

  const Increase = () => {
    if (seats < 10) {
      setSeats(seats + 1);
    }
  };
  // function to format the date from the date input field
  const onChanageDate = (date) => {
    const newDate = moment(new Date(date.target.value)).format("YYYY-MM-DD");
    setDate(newDate);
  };
  // auto scroll into form section on mount
  React.useEffect(() => {
    if (available) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [available]);

  return (
    // contrainer of reserve a table page
    <div className="  w-[100%] border-[5px]  bg-Sbage py-[5vh]">
      {/* flex contrainer for the reserve a table page elements */}
      <div className="flex flex-col items-center w-[100%] ">
        <h1 className="text-[50px] lg:text-[60px] sm:text-[80px] text-Pgreen font-semibold font-primary pb-[5px]  ">
          Reserve a Table
        </h1>
        <h2 className=" text-[30px] lg:text-[40px] text-center sm:text-[40px] text-Pgreen border-t-[1px] border-Sgray font-primary ">
          Please select number of seats needed
        </h2>
        <h2 className="text-[40px] sm:text-[40px] text-Sgray font-bold font-primary ">
          {seats}
        </h2>
        <div className="container flex flex-row  justify-around mt-[25px] scale-[1] lg:scale-[1.1] lg:-space-x-[500px] mx-auto mt-[10px] h-[220px] w-[100%] lg:w-[70%]">
          <button className="scale-[0.8] lg:scale-[1]" onClick={Reduce}>
            <MinusIcon color={"#495E57"} boxSize={"40px"}></MinusIcon>
          </button>
          {/* a responsive table that changes number of seats based on seats needed */}
          <ResponsiveTable seats={seats}></ResponsiveTable>
          <button className="scale-[0.8] lg:scale-[1]" onClick={Increase}>
            <AddIcon color={"#495E57"} boxSize={"40px"}></AddIcon>
          </button>
        </div>
        {/* flex contrainer for the choose date and time input + availbilty check */}
        <div ref={myRef} className="flex flex-col scale-[1.14] mt-[80px]">
          <label for="res-date">
            <h2 className="text-[40px] sm:text-[40px] text-Pgreen font-bold font-primary ">
              Choose Date
            </h2>
          </label>
          <input
            className="border-[3px] border-Pgreen text-center  font-bold text-center font-primary"
            type="date"
            id="res-date"
            min={moment().format("YYYY-MM-DD")}
            max="2023-12-31"
            onChange={(e) => onChanageDate(e)}
          ></input>
          <label for="res-time">
            <h2 className="text-[40px] sm:text-[40px] text-Pgreen font-bold font-primary ">
              Choose Time
            </h2>
          </label>
          <select
            onChange={(e) => {
              setTime(e.target.value);
            }}
            className="border-[3px] border-Pgreen text-center  font-bold font-primary"
            id="res-time "
          >
            <option>-Please select a time-</option>
            <option>{times[0]}</option>
            <option>{times[1]}</option>
            <option>{times[2]}</option>
            <option>{times[3]}</option>
            <option>{times[4]}</option>
            <option>{times[5]}</option>
          </select>
          {/* function that checks if table is avaiable based on seasts needed + time + date  */}
          <Availbitiy
            setAvailable={setAvailable}
            available={available}
            date={date}
            seats={seats}
            time={time}
          ></Availbitiy>
        </div>
        {/* form field to input users booking information */}
        <AnimatePresence>
          {available ? (
            <motion.div {...animation}>
              <Form></Form>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
