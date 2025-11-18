import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between  items-center mx-16 p-2 border-b-2 border-gray-200">
      <img src={assets.logo} alt="Logo" />
      <ul className="flex  justify-between items-center p-2 gap-5">
        <li>
          <NavLink>HOME</NavLink>
        </li>
        <li>
          <NavLink>ALL DOCTORS</NavLink>
        </li>
        <li>
          <NavLink>ABOUT</NavLink>
        </li>
        <li>
          <NavLink>CONTACT US</NavLink>
        </li>
      </ul>
      <div>
        <button className=" p-2  text-center text-sm rounded-3xl bg-[#5f6fff] text-white cursor-pointer ">
          Create account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
