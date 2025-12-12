import React from "react";
import { assets } from "../../assets/assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Login from "../login/Signup";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="flex justify-start items-center gap-60 p-2 px-5 
                    border-b border-gray-200 sticky top-0  bg-white z-10"
    >
      <img className="w-40" src={assets.logo} alt="Logo" />

      <ul className="flex items-center p-2 gap-6">
        <li className="text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary p-1" : ""
            }
          >
            APPOINTMENTS
          </NavLink>
        </li>

        <li className="text-sm font-semibold">
          <NavLink
            to="/patient/dashboard/all-doctors"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary p-1" : ""
            }
          >
            ALL DOCTORS
          </NavLink>
        </li>

        <li className="text-sm font-semibold">
          <NavLink
            to="/patient/dashboard/about"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary p-1" : ""
            }
          >
            ABOUT
          </NavLink>
        </li>

        <li className="text-sm font-semibold">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary p-1" : ""
            }
          >
            CONTACT US
          </NavLink>
        </li>
      </ul>
      {location.pathname.includes("/") ? null : (
        <button
          onClick={() => navigate("/signup")}
          className="p-3 px-8 text-sm rounded-3xl bg-primary text-white cursor-pointer"
        >
          Create account
        </button>
      )}
    </div>
  );
};

export default Navbar;
