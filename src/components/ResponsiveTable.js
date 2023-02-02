import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import tableLg from "./imgs/tableLg.png";
import tableMd from "./imgs/tableMd.png";
import tableSm from "./imgs/tableSm.png";
import tableXl from "./imgs/tableXl.png";
import chairDown from "./imgs/chairDown.png";
import chairLeft from "./imgs/chairLeft.png";
import chairRight from "./imgs/chairRight.png";
import chairUp from "./imgs/chairUp.png";

export default function ResponsiveTable(props) {
  // animations for seats + table changes
  const animation = {
    initial: { scale: 0.7, opacity: 0, x: 0, y: "-30%" },
    animate: { scale: 1, opacity: 1, x: 1, y: 0 },
    exit: { scale: 0.7, opacity: 0, y: "-50%" },
    transition: { duration: 0.2 },
  };
  const animationTable = {
    initial: { opacity: 0, x: 0 },
    animate: { scale: 1, opacity: 1, x: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };
  const animationChairLeft = {
    initial: { scale: 0.7, opacity: 0, x: "-30%" },
    animate: { scale: 1, opacity: 1, x: 1 },
    exit: { scale: 0.7, opacity: 0 },
    transition: { duration: 0.2 },
  };

  const table = (param) => {
    // a switch for all 10 tables (could be improved)
    switch (param) {
      case 1:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <motion.div {...animation}>
              <img
                src={chairUp}
                className={"-mb-[200px] ]"}
                width={"70px"}
                alt=""
              />
            </motion.div>
            <motion.div key="table1" {...animationTable}>
              <img src={tableSm} width={"220px"} alt="" />
            </motion.div>
            <div className=" -mt-[90px] w-[50px]  text-white"></div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <motion.div {...animation}>
              <img
                src={chairUp}
                className={"-mb-[120px]"}
                width={"70px"}
                alt=""
              />
            </motion.div>

            <motion.div
              key="table1"
              {...animationTable}
              className={"relative z-10"}
            >
              <img src={tableSm} width={"220px"} alt="" />
            </motion.div>
            <motion.div {...animation}>
              <img
                src={chairDown}
                className={"-mt-[90px] ]"}
                width={"70px"}
                alt=""
              />
            </motion.div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <div className="flex flex-row space-x-[20px] md:space-x-[20px]">
              <motion.div {...animation}>
                <img src={chairUp} className={"-mb-[200px] w-[70px]"} alt="" />
              </motion.div>
              <motion.div {...animation}>
                <img src={chairUp} className={"-mb-[200px] w-[70px]"} alt="" />
              </motion.div>
            </div>
            <div className="flex flex-row -space-x-[65px]  space-y-0">
              <motion.div
                key="table2"
                {...animationTable}
                className="relative z-10"
              >
                <img src={tableMd} className={"w-[350px]"} alt="" />
              </motion.div>
            </div>
            <motion.div {...animation}>
              <img src={chairDown} className={"-mt-[90px]  w-[70px]"} alt="" />
            </motion.div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1]  items-center w-[600px] space-y-3">
            <div className="flex flex-row space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img src={chairUp} className={"-mb-[200px] w-[70px]"} alt="" />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img src={chairUp} className={"-mb-[200px] w-[70px]"} alt="" />
              </motion.div>
            </div>
            <div className="flex flex-row -space-x-[65px]  space-y-0">
              <motion.div
                key="table2"
                {...animationTable}
                className="relative z-10"
              >
                {" "}
                <img src={tableMd} className={"w-[350px]"} alt="" />
              </motion.div>
            </div>
            <div className="flex flex-row space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px]  w-[70px]"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px]  w-[70px]"}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <div className="flex flex-row space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img src={chairUp} className={"-mb-[200px] w-[70px]"} alt="" />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img src={chairUp} className={"-mb-[200px] w-[70px]"} alt="" />
              </motion.div>
            </div>
            <div className="flex flex-row  -space-x-[65px] mr-[15px]  space-y-0">
              <motion.div {...animationChairLeft}>
                {" "}
                <img src={chairLeft} className={"mt-[75px] w-[80px]"} alt="" />
              </motion.div>
              <motion.div
                key="table2"
                {...animationTable}
                className="relative z-10"
              >
                <img src={tableMd} className={"w-[350px]"} alt="" />
              </motion.div>
            </div>

            <div className="flex flex-row space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px]  w-[70px]"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px]  w-[70px]"}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <div className="flex flex-row space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={" -mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>

            <div className="flex flex-row -space-x-[65px]   space-y-0">
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairLeft}
                  className={"mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
              <motion.div
                key="table2"
                {...animationTable}
                className="relative z-10"
              >
                <img src={tableMd} width={"350px"} alt="" />
              </motion.div>
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairRight}
                  className={"mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
            </div>
            <div className="flex flex-row space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <div className="flex flex-row scale-[0.9] md:scale-[1] space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] "}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>

            <div className="flex flex-row -space-x-[65px]  space-y-0">
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairLeft}
                  className={"mt-[65px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
              <motion.div
                key="table3"
                {...animationTable}
                className="relative z-10"
              >
                <img src={tableLg} width={"400px"} alt="" />
              </motion.div>
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairRight}
                  className={"mt-[65px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
            </div>
            <div className="flex flex-row scale-[0.9] md:scale-[1] space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <div className="flex flex-row scale-[0.9] md:scale-[1] space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>

            <div className="flex flex-row -space-x-[65px]  space-y-0">
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairLeft}
                  className={"mt-[65px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
              <motion.div
                key="table3"
                {...animationTable}
                className="relative z-10"
              >
                <img src={tableLg} width={"400px"} alt="" />
              </motion.div>
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairRight}
                  className={"mt-[65px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
            </div>
            <div className="flex flex-row scale-[0.9] md:scale-[1] space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1] items-center w-[600px] space-y-3">
            <div className="flex flex-row scale-[0.8] md:scale-[1] space-x-[10px] md:space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>

            <div className="flex flex-row -space-x-[60px] md:-space-x-[65px]  space-y-0">
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairLeft}
                  className={"mt-[60px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
              <motion.div
                key="table4"
                {...animationTable}
                className="relative z-10"
              >
                <img src={tableXl} width={"500px"} alt="" />
              </motion.div>
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairRight}
                  className={"mt-[60px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
            </div>
            <div className="flex flex-row scale-[0.8] md:scale-[1] space-x-[10px] md:space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="flex flex-col scale-[0.9] md:scale-[1]  w-[600px] items-center space-y-3">
            <div className="flex flex-row scale-[0.8] md:scale-[1] space-x-[10px] md:space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairUp}
                  className={"-mb-[200px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>

            <div className="flex flex-row -space-x-[60px] sm:-space-x-[65px]  space-y-0">
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairLeft}
                  className={"mt-[60px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
              <motion.div
                key="table4"
                {...animationTable}
                className="relative z-10"
              >
                <img src={tableXl} width={"500px"} alt="" />
              </motion.div>
              <motion.div {...animationChairLeft}>
                {" "}
                <img
                  src={chairRight}
                  className={"mt-[60px] sm:mt-[75px]"}
                  width={"80px"}
                  alt=""
                />
              </motion.div>
            </div>
            <div className="flex flex-row scale-[0.8] md:scale-[1] space-x-[10px] md:space-x-[20px]">
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
              <motion.div {...animation}>
                {" "}
                <img
                  src={chairDown}
                  className={"-mt-[90px] ]"}
                  width={"70px"}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        );
    }
  };
  return <>{table(props.seats)}</>;
}
