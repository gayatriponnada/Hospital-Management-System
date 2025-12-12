import { useState } from "react";
import about from "../../assets/about_image.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const { login } = useAuth();

  const [details, setDetails] = useState({
    fullname: "",
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

    if (!details.fullname) {
      newError.fullname = "Full name is required";
    } else if (details.fullname.length < 3 || details.fullname.length > 50) {
      newError.fullname = "Full name must be at least 3 or 50 characters long";
    } else if (details.fullname.match(/[^a-zA-Z\s]/)) {
      newError.fullname =
        "Full name must not contain special characters or numbers";
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

    if (!details.role) {
      newError.role = "Role is required";
    }

    setErrors(newError);

    return Object.keys(newError).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      login({
        fullname: details.fullname,
        email: details.email,
        password: details.password,
        role: details.role,
      });

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
      <div className="flex flex-col gap-5 w-[50%] rounded-xl border border-(--border-primary) p-4 shadow-xl relative z-10 ">
        <div className="text-2xl text-gray-600 font-medium">
          Create an account
        </div>
        <div className="text-sm text-gray-600">
          Please create an account to book appointment
        </div>

        <div className=" flex  flex-wrap gap-2 ">
          <div className="w-[48%]">
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              className="w-full p-2 border-(--border-primary) border rounded outline-none focus:border-input focus:outline-none"
              value={details?.fullname}
              onChange={(e) => {
                setDetails({ ...details, fullname: e.target.value });
              }}
              placeholder="Enter your first name"
              type="text"
            />
            {errors.fullname && (
              <p className="text-red-400 text-xs font-normal">
                {errors.fullname}
              </p>
            )}
          </div>

          <div className="w-[48%]">
            <label className="text-sm text-gray-600">Email</label>
            <input
              className="w-full p-2 border-(--border-primary) border rounded outline-none focus:border-input focus:outline-none"
              value={details?.email}
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
              placeholder="Enter your email"
              type="email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs font-normal">{errors.email}</p>
            )}
          </div>

          <div className="w-[48%]">
            <label className="text-sm text-gray-600">Password</label>
            <input
              className="w-full p-2 border-(--border-primary) border rounded outline-none focus:border-input focus:outline-none"
              value={details?.password}
              onChange={(e) => {
                setDetails({ ...details, password: e.target.value });
              }}
              placeholder="Enter your password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-400 text-xs font-normal">
                {errors.password}
              </p>
            )}
          </div>

          <div className="w-[48%]">
            <label className="text-sm text-gray-600">Select Role</label>
            <select
              className="select w-full p-2 border-(--border-primary) border font-normal rounded outline-none focus:border-input focus:outline-none"
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
        </div>

        <div
          className=" flex bg-gray-700 justify-center items-center rounded-xl p-2 cursor-pointer "
          onClick={handleLogin}
        >
          <button className="text-white cursor-pointer">Register</button>
        </div>
        <div className="flex gap-2">
          <div className="text-sm text-gray-400">Create an new account?</div>
          <a className="text-gray-700 text-sm underline" href="/login">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
