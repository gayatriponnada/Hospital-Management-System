import React from "react";
import { assets } from "../assets/assets";

const CustomHeader = ({ line1, line2, line3, text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex  items-center justify-center  w-[60vw]  h-[70vh]  bg-primary p-4 rounded-3xl">
        <div className="flex flex-col gap-2 ">
          <div className=" text-4xl font-bold text-white">{line1}</div>
          <div className=" text-4xl font-bold text-white">{line2}</div>
          <div className=" text-4xl font-bold text-white">{line3}</div>
          <button className="flex gap-3 text-[#585859] bg-white w-48 p-2 rounded-3xl items-center justify-center mt-4 cursor-pointer hover:scale-110 transition-transform ease-in-out">
            {text}
          </button>
        </div>
        <div>
          <img
            className="w-78 h-78"
            src={assets.appointment_img}
            alt="header"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
