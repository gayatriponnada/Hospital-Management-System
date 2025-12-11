import React from "react";
import { assets } from "../../assets/assets";
import arrow_icon from "../../assets/arrow_icon.svg";

const Header = ({scrollToSpecialties}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="  flex items-center justify-center w-[80vw] h-[70vh]  bg-primary p-4 rounded-3xl">
        <div className="flex flex-col gap-2 ">
          <div className=" text-4xl font-bold text-white">Book Appointment</div>
          <div className=" text-4xl font-bold text-white">With Trusted</div>
          <div className=" text-4xl font-bold text-white">Doctors</div>
          <div className="flex gap-4">
            <img src={assets.group_profiles}></img>
            <div className="flex flex-col">
              <div className="text-xs text-white">
                Simply browse through our extensive list of
              </div>
              <div className="text-xs text-white">trusted doctors,</div>
              <div className="text-xs text-white">
                schedule your appointment hassle-free.
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-[#585859] bg-white w-48 p-2 rounded-3xl items-center justify-center mt-4 cursor-pointer hover:scale-110 transition-transform ease-in-out">
            <button className="cursor-pointer" onClick={scrollToSpecialties}>
              Book appointment
            </button>
            <img src={arrow_icon} alt="down arrow icon"></img>
          </div>
        </div>
        <div>
          <img className="w-80 h-78" src={assets.header_img} alt="header" />
        </div>
      </div>
    </div>
  );
};

export default Header;
