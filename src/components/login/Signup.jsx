import { useState } from "react";

const Signup = () => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newError = {};

    if (!details.fullName) {
      newError.fullName = "Full Name is required";
    } else if (details.fullName.length < 3 || details.fullName.length > 50) {
      newError.fullName = "Full Name must be between 3 and 50 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(details.fullName)) {
      newError.fullName = "Full Name can only contain letters and spaces";
    }

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

  const handleValidate = () => {
    if (!validate()) return;
  };
  return (
    <div className="flex items-center justify-center h-[89vh] ">
      <div className="flex flex-col gap-5 w-[28vw]  h-[80vh] rounded-xl border border-(--border-primary) p-4 shadow-xl">
        <div className="text-2xl text-gray-600 font-medium">Create Account</div>
        <div className="text-sm text-gray-600">
          Please sign up to book appointment
        </div>
        <div>
          <div className="text-sm text-gray-600">Full Name</div>
          <input
            className="w-full p-2 border-(--border-primary) border rounded"
            value={details?.fullName}
            onChange={(e) => {
              setDetails({ ...details, fullName: e.target.value });
            }}
            type="text"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs font-normal">
              {errors.fullName}
            </p>
          )}
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
        <div className="flex flex-col gap-1">
          <div className="text-sm text-gray-600 ">Password</div>
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
        <div
          className=" flex bg-primary justify-center items-center rounded-xl p-2 cursor-pointer"
          onClick={handleValidate}
        >
          <button className="text-white cursor-pointer">Create Account</button>
        </div>
        <div>
          <div className="text-sm text-gray-600">
            Already have an account?{" "}
            <a className="text-primary" href="/login">
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
