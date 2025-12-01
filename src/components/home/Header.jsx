import React from 'react'
import { assets } from "../../assets/assets";
import arrow_icon from "../../assets/arrow_icon.svg";

const Header = () => {
	return (
    <div className="  flex max-w-3xl  min-h-42  bg-primary p-4">
      <div>
        <div className="flex flex-col gap-0.5">
          <div className=" text-4xl font-bold text-white">Book Appointment</div>
          <div className=" text-4xl font-bold text-white">With Trusted</div>
          <div className=" text-4xl font-bold text-white">Doctors</div>
        </div>
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
          <button className="cursor-pointer">Book appointment</button>
          <img src={arrow_icon} alt="down arrow icon"></img>
        </div>
      </div>
      <div>
        <img className="w-68 h-62" src={assets.header_img} alt="header" />
      </div>
    </div>
  );
}

export default Header