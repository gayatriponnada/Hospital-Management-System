import React, { useState } from "react";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
	
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
  };

  const handleLogin = () => {
    if (!validate()) return;

    console.log("Form submitted", details);
  };

  return (
    <div className="flex items-center justify-center h-[84vh] ">
      <div className="flex flex-col gap-5 w-[28vw]  h-[70vh] rounded-xl border border-(--border-primary) p-4 shadow-xl">
        <div className="text-2xl text-gray-600 font-medium">Login</div>
        <div className="text-sm text-gray-600">
          Please log in to book appointment
        </div>
        <div>
          <div className="text-sm text-gray-600">Email</div>
          <input
            className="w-full p-2 border-(--border-primary) border rounded"
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
          <div className="text-sm text-gray-600">Password</div>
          <input
            className="w-full p-2 border-(--border-primary) border rounded"
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
        <div className=" flex bg-primary justify-center items-center rounded-xl p-2 cursor-pointer">
          <button className="text-white cursor-pointer" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="flex gap-2">
          <div className="text-sm text-gray-600">Create an new account?</div>
          <a className="text-primary text-sm" href="/signup">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
