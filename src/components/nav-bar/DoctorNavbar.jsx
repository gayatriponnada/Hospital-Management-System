import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const DoctorNavbar = () => {
  return (
    <div
      className="flex justify-between items-center  p-3  px-6
                    border-b border-gray-200 sticky top-0  bg-white z-10 rounded-lg shadow-md"
    >
      <div className="w-40">
        <img src={assets?.logo} alt="Logo" />
      </div>
      <div className="flex gap-10 items-center">
        <div>
          <NavLink
            to={"/doctor/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary p-1 font-semibold text-sm "
                : "font-semibold text-sm"
            }
          >
            DASHBOARD
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/doctor/appointments"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary p-1 font-semibold text-sm"
                : "font-semibold text-sm"
            }
          >
            APPOINTMENTS
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/doctor/patient"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary p-1 font-semibold text-sm"
                : "font-semibold text-sm"
            }
          >
            PATIENTS
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DoctorNavbar;
