import React from "react";
import { assets } from "../../assets/assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div
      className="flex justify-between items-center  p-2 px-5 
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
            to="/patient/dashboard/lab-reports"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary p-1" : ""
            }
          >
            LAB REPORTS
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

      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          role="button"
          className="avatar avatar-placeholder cursor-pointer"
        >
          <div className="bg-neutral text-neutral-content w-8 rounded-full">
            <span className="text-lg">{user?.email?.[0]}</span>
          </div>
        </button>

        <div className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60 min-h-40">
          {user ? (
            <div className="flex flex-col gap-3">
              <span className="text-center">
                Welcome
                <span className="text-sm font-bold text-primary">
                  {" "}
                  {user?.fullname},
                </span>
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-4">
                  <span className="font-bold w-[15%]">Email</span>
                  <span>{user?.email}</span>
                </div>
                <div className="flex justify-start gap-4">
                  <span className="font-bold w-[15%]">Role</span>
                  <span>{user?.role}</span>
                </div>
                <button className="btn" onClick={() => navigate("/login")}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <span>Please Login</span>
          )}
        </div>
      </div>

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
