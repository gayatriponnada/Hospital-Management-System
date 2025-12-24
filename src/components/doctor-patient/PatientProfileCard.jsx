import React from "react";

const PatientProfileCard = () => {
  return (
    <div className="bg-white rounded-lg flex flex-col items-center gap-2 py-4 w-[20%]">
      <div className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-10 rounded-full">
          <span className="text-lg">D</span>
        </div>
      </div>
      <div className="text-neutral font-semibold">Name:</div>
      <div className="text-neutral-content font-normal">Age:</div>
      <button className="btn bg-success text-white w-30">Update</button>
    </div>
  );
};

export default PatientProfileCard;
