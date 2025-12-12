import React, { useState } from "react";
import about from "../../assets/about_image.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const users = [
    { role: "patient", displayName: "Patient" },
    { role: "doctor", displayName: "Doctor" },
    { role: "admin", displayName: "Admin" },
  ];

  const validate = () => {
    const newError = {};

    if (!details.email) {
      newError.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(details.email)) {
      newError.email = "Invalid email";
    }

    if (!details.password) {
      newError.password = "Password is required";
    } else if (details.password.length < 6) {
      newError.password = "Password must be at least 6 characters long";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      if (details.role === "admin") {
        navigate("/admin/dashboard");
        return;
      } else if (details.role === "doctor") {
        navigate("/doctor/dashboard");
        return;
      } else if (details.role === "patient") {
        navigate("/");
        return;
      }
      return;
    }
  };

  return (
    <div
      className="flex items-center justify-center  w-screen h-screen bg-cover  "
      style={{
        backgroundImage: `url(${about})`,
        backgroundPosition: "center 20%",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-white/8"></div>
      <div className="flex flex-col gap-5 w-[28vw]  min-h-[70vh] rounded-xl border border-(--border-primary) p-4 shadow-xl relative z-10 ">
        <div className="text-2xl text-gray-600 font-medium">Login</div>
        <div className="text-sm text-gray-600">
          Please log in to book appointment
        </div>
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            className="w-full p-2 border-(--border-primary) border rounded outline-none focus:border-input focus:outline-none "
            value={details?.email}
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            type="text"
            placeholder="Enter your Email"
          />
          {errors.email && (
            <p className="text-red-400 text-xs font-normal">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            className="w-full p-2 border-(--border-primary) border rounded outline-none focus:border-input focus:outline-none"
            value={details?.password}
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
            type="password"
            placeholder="Enter your Password"
          />
          {errors.password && (
            <p className="text-red-400 text-xs font-normal">
              {errors.password}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="text-sm text-gray-600">Select Role</label>
          <select
            className=" select  w-full p-2 border-(--border-primary) border rounded font-normal outline-none focus:border-input focus:outline-none"
            defaultValue="Select Appointment Type"
            value={details?.role}
            onChange={(e) => {
              setDetails({ ...details, role: e.target.value });
            }}
          >
            {users.map((user) => (
              <option key={user.role} value={user.role}>
                {user.displayName}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="text-red-400 text-xs font-normal">{errors.role}</p>
          )}
        </div>
        <div
          className=" flex bg-gray-700 justify-center items-center rounded-xl p-2 cursor-pointer"
          onClick={handleLogin}
        >
          <button className="text-white cursor-pointer font-normal">
            Login
          </button>
        </div>
        <div className="flex gap-2">
          <div className="text-sm text-gray-400">Create an new account?</div>
          <a className="text-gray-700 text-sm underline" href="/signup">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
