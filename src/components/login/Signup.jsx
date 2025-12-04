import { useState } from "react";

const Signup = () => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });

const handleClick = () => {
  console.log(details);
}  
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
        </div>
        <div
          className=" flex bg-primary justify-center items-center rounded-xl p-2 cursor-pointer"
          onClick={handleClick}
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
