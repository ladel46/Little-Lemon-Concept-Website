import React from "react";
import { useFormik } from "formik";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import ResponsiveTable from "../ResponsiveTable";
import moment from "moment";
import Availbitiy from "../Availbitiy";

export default function Booking() {
  const [seats, setSeats] = React.useState(1);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const formik = useFormik({
    initialValues: {},
  });
  const Reduce = () => {
    if (seats > 1) {
      setSeats(seats - 1);
    }
  };
  const Increase = () => {
    if (seats < 10) {
      setSeats(seats + 1);
    }
  };
  const onChanageDate = (date) => {
    const newDate = moment(new Date(date.target.value)).format("YYYY-MM-DD");
    setDate(newDate);
  };
  React.useEffect(() => {
    console.log(date, time);
  }, [date, time]);
  return (
    <div className="container mx-auto w-[90%] border-[5px]  bg-Sbage py-[5vh]">
      <div className="flex flex-col items-center w-[100%] ">
        <h1 className="text-[60px] sm:text-[80px] text-Sgray font-semibold font-primary pb-[5px]  ">
          Reserve a Table
        </h1>
        <h2 className="text-[40px] sm:text-[40px] text-Sgray border-t-[1px] border-Sgray font-primary ">
          Please select number of seats needed
        </h2>
        <h2 className="text-[40px] sm:text-[40px] text-Sgray font-bold font-primary ">
          {seats}
        </h2>
        <div className="container flex flex-row  justify-around mt-[20px] -space-x-[500px] mx-auto mt-[10px] h-[220px] w-[70%]">
          <button onClick={Reduce}>
            <MinusIcon color={"Gray"} boxSize={"30px"}></MinusIcon>
          </button>
          <ResponsiveTable seats={seats}></ResponsiveTable>
          <button onClick={Increase}>
            <AddIcon color={"Gray"} boxSize={"30px"}></AddIcon>
          </button>
        </div>
        <div className="flex flex-col mt-[60px]">
          <label for="res-date">
            <h2 className="text-[40px] sm:text-[40px] text-Sgray font-bold font-primary ">
              Choose Date
            </h2>
          </label>
          <input
            className="border-[5px] font-bold text-center font-primary"
            type="date"
            id="res-date"
            min={moment().format("YYYY-MM-DD")}
            max="2023-12-31"
            onChange={(e) => onChanageDate(e)}
          ></input>
          <label for="res-time">
            <h2 className="text-[40px] sm:text-[40px] text-Sgray font-bold font-primary ">
              Choose Time
            </h2>
          </label>
          <select
            onChange={(e) => {
              setTime(e.target.value);
            }}
            className="border-[5px] rounded-[2%] text-center font-bold font-primary"
            id="res-time "
          >
            <option>-Please select a time-</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <Availbitiy date={date} time={time}></Availbitiy>
        </div>
      </div>
    </div>
  );
}
