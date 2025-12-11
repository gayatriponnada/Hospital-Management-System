import React from "react";
import { assets } from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../login/Signup";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-between items-center p-2 px-5 
                    border-b border-gray-200 sticky top-0  bg-white z-10"
    >
      <img className="w-40" src={assets.logo} alt="Logo" />

      <ul className="flex items-center p-2 gap-5">
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

        <li className="text-sm font-semibold">
          <NavLink
            to="/patient/dashboard/all-doctors"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary" : ""
            }
          >
            ALL DOCTORS
          </NavLink>
        </li>

        <li className="text-sm font-semibold">
          <NavLink
            to="/patient/dashboard/about"
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

      <button
        onClick={() => navigate("/signup")}
        className="p-3 px-8 text-sm rounded-3xl bg-primary text-white cursor-pointer"
      >
        Create account
      </button>
    </div>
  );
};

export default Navbar;
