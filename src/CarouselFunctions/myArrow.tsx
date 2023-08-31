import React from "react";
import NextBtn from "../components/NextBtn";
import { consts } from "@itseasy21/react-elastic-carousel";

interface MyArrowProps {
  type: string;
  onClick: () => void;
  isEdge: boolean;
}

export default function myArrow({
  type,
  onClick,
  isEdge,
}: MyArrowProps): JSX.Element {
  if (window.innerWidth < 640) {
    return <></>;
  }
  if (type === consts.PREV) {
    // if (isEdge) {
    //   return <></>;
    // }
    return (
      <div
        onClick={onClick}
        className={`button-container absolute left-0 z-10 cursor-custom-action sm:top-[48%]  sm:h-16  sm:w-16 md:top-[40%]  md:h-32 
         md:w-24 ${isEdge ? "hidden" : ""}`}
      >
        <NextBtn />
      </div>
    );
  } else {
    if (isEdge) {
      return <></>;
    }
    return (
      <button
        onClick={onClick}
        className={`next-btn-animation button-container absolute right-0 z-10 cursor-custom-action  sm:top-[48%]  sm:h-16 sm:w-16  md:top-[40%] md:h-32
        md:w-24
        ${isEdge ? "hidden" : ""}`}
      >
        <NextBtn isRight={true} />
      </button>
    );
  }
}
