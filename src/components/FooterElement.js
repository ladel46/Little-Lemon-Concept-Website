import React from "react";

export default function FooterElement(props) {
  return (
    // Elemet of the footer section

    <h4 className="text-start hover:underline hover:text-Sorange right-[30px] font-primary  -mt-[10px] md:mb-[10px] text-Pyellow text-[20px] ">
      {props.Element}
    </h4>
  );
}
