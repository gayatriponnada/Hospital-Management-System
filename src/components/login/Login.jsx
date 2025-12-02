import React, { useEffect } from 'react'

const Login = () => {
	useEffect(() => {
		console.log("Login component mounted");
	}, [])
	return (
    <div className="flex items-center justify-center h-[89vh] overflow-hidden">
      <div className="flex flex-col gap-5 w-[28vw]  h-[70vh] rounded-xl border border-(--border-primary) p-4 shadow-xl">
        <div className="text-2xl text-gray-400 font-medium">Create Account</div>
        <div className="text-sm text-gray-600">
          Please sign up to book appointment
        </div>
        <div>
          <div className="text-sm text-gray-600">Full Name</div>
          <input
            className="w-full p-2 border-(--border-primary) border rounded"
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <div className="text-sm text-gray-600">Email</div>
          <input
            className="w-full p-2 border-(--border-primary) border rounded"
            type="text"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-sm text-gray-600 ">Password</div>
          <input
            className="w-full p-2 border-(--border-primary) border rounded"
            type="text"
            placeholder="Enter your Password"
          />
        </div>
        <div className=" flex bg-primary justify-center items-center rounded-xl p-2 cursor-pointer">
          <button className="text-white cursor-pointer">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login