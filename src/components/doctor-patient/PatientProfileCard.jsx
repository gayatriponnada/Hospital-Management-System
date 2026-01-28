import React from "react";
import PatientInfoCard from "./PatientInfoCard";

const PatientProfileCard = () => {
  return (
    <div className="flex flex-col gap-4 w-[26%]">
      <div className="bg-white rounded-lg flex flex-col items-center gap-2 py-4 ">
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <span className="text-lg">D</span>
          </div>
        </div>
        <div className="text-neutral font-semibold">Name:</div>
        <div className="text-neutral-content font-normal">Age:</div>
        <button className="btn bg-success text-white w-30">Update</button>
      </div>
      <PatientInfoCard />
    </div>
  );
};

export default PatientProfileCard;
