import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../config/supabaseClient";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { user } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Get current logged-in user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          console.log("No logged-in user or error:", userError);
          return;
        }

        //  Fetch profile from Profiles table
        const { data, error } = await supabase
          .from("Profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.log("Error fetching user details:", error);
        } else {
          setUserDetails(data);
          console.log("User details:", data);
        }
      } catch (err) {
        console.log("Unexpected error:", err);
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <div
      className="flex justify-between items-center  p-3 px-6
                    border-b border-gray-200 sticky top-0  bg-white z-10 shadow-md"
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

        {/* <li className="text-sm font-semibold">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary p-1" : ""
            }
          >
            CONTACT US
          </NavLink>
        </li> */}
      </ul>

      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          role="button"
          className="avatar avatar-placeholder cursor-pointer"
        >
          <div className="bg-neutral text-neutral-content w-8 rounded-full">
            <span className="text-lg">{userDetails?.fullname?.[0]}</span>
          </div>
        </button>

        <div className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60 min-h-40">
          {userDetails  ? (
            <div className="flex flex-col gap-3">
              <span className="text-center">
                Welcome
                <span className="text-sm font-bold text-primary">
                  {" "}
                  {userDetails?.fullname},
                </span>
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-4">
                  <span className="font-bold w-[15%]">Email</span>
                  <span>{userDetails?.email}</span>
                </div>
                <div className="flex justify-start gap-4">
                  <span className="font-bold w-[15%]">Role</span>
                  <span>{userDetails?.role}</span>
                </div>
                <button
                  className="btn"
                  onClick={async () => {
                    await supabase.auth.signOut();
                    setUserDetails(null);
                    navigate("/login");
                  }}
                >
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
