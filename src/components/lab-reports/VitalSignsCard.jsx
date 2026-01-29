import React from "react";
import blood_pressure from "../../assets/blood_pressure.png";
import body_temp_img from "../../assets/body_temp_img.png";
import oxygen_img from "../../assets/oxygen _img.png";

const VitalSignsCard = () => {
  return (
    <div className="flex flex-col bg-white h-full p-4 rounded-lg shadow-md">
      <div className=" text-sm font-semibold text-primary">Vital Signs</div>
      <div className="flex justify-start items-center gap-2 w-[90%] border-b border-base-300 p-2">
        <div>
          <img className="w-10" src={blood_pressure} />
        </div>
        <div className="flex flex-col gap-1  ">
          <div className="text-xs font-normal ">Blood Pressure</div>
          <div className="text-sm font-bold">
            120/80 <span className="text-xs font-normal "> mmHg</span>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 w-[90%] border-b border-base-300 p-2">
        <div>
          <img className="w-10" src={body_temp_img} />
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="text-xs font-normal ">Body Temperature</div>
          <div className="text-sm font-bold">
            36.6 <span className="text-xs font-normal "> °C</span>
          </div>
        </div>
      </div>
      <div className="flex  justify-start items-center gap-2 p-2">
        <div>
          <img className="w-12" src={oxygen_img} />
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="text-xs font-normal ">Thyroid</div>
          <div className="text-sm font-bold">
            97 <span className="text-xs font-normal "> %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalSignsCard;
