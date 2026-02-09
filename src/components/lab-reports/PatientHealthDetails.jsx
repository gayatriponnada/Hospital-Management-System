import React from "react";
import heart_img from "../../assets/heart_img.png";
import heart_rate_img from "../../assets/heart_rate_img.png";
import heart_pluse_img from "../../assets/heart_pluse_img.jpg";

const PatientHealthDetails = ({ patientHealthDetails }) => {
  return (
    <div className="bg-white w-[40%] p-4 rounded-lg shadow-md flex flex-col gap-4 h-full">
      <div className="text-sm font-bold text-primary">Heart Status</div>
      <div className="flex justify-between items-center h-screen  ">
        <div className="bg-base-100 w-[50%]  h-full rounded-lg ">
          <div className="flex flex-col gap-2 p-2 w-[80%] ">
            <div className=" flex gap-2">
              <img
                className="w-14 rounded-lg"
                src={heart_pluse_img}
                alt="heart pluse img"
              />
              <div className="w-full">
                <div className="text-xs font-medium">Heart Rate</div>
                <div className=" text-normal font-bold">
                  {patientHealthDetails?.heartRate}
                </div>
              </div>
            </div>
            <div className="bg-white w-full rounded-lg">
              <img className="" src={heart_rate_img} alt="heart rate img" />
            </div>
          </div>
          <div className="flex flex-col p-2 border-b border-base-300">
            <div className="text-sm font-medium">Blood count</div>
            <div className=" text-normal font-bold">
              {" "}
              {patientHealthDetails?.bloodCount}
            </div>
          </div>
          <div className="flex flex-col p-2 border-b border-base-300">
            <div className="text-sm font-medium">Cholesterol</div>
            <div className=" text-normal font-bold">
              {patientHealthDetails?.cholesterol}<span className="text-xs text-secondary pl-1">mg/dl</span>
            </div>
          </div>
          <div className="flex flex-col p-2 border-b border-base-300">
            <div className="text-sm font-medium">
              Blood Glucose Level (After)
            </div>
            <div className=" text-normal font-bold">
              {patientHealthDetails?.bloodGlucoseLevelAfter}
              <span className="text-xs text-secondary pl-1">mg/dl</span>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="text-sm font-medium">Saturation</div>
            <div className=" text-normal font-bold">
              {patientHealthDetails?.saturation}
              <span className="text-xs text-secondary pl-1">%</span>
            </div>
          </div>
        </div>
        <img className="w-52" src={heart_img} alt="heart status img" />
      </div>
    </div>
  );
};

export default PatientHealthDetails;
