import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between  items-center mx-16 p-2 border-b border-gray-200 top-0 sticky">
      <img className="w-42" src={assets.logo} alt="Logo" />
      <ul className="flex  justify-between items-center p-2 gap-5">
        <li className="text-sm font-semibold ">
          <li className="text-sm font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-primary" : ""
              }
            >
              HOME
            </NavLink>
          </li>
        </li>

        <li className="text-sm font-semibold ">
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary" : ""
            }
          >
            ALL DOCTORS
          </NavLink>
        </li>
        <li className="text-sm font-semibold">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary" : ""
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li className="text-sm font-semibold">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary" : ""
            }
          >
            CONTACT US
          </NavLink>
        </li>
      </ul>
      <div>
        <button className="p-3 px-8 text-center text-sm rounded-3xl bg-primary text-white cursor-pointer">
          Create account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
