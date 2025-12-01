import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import { doctors } from "../../assets/assets";


const DoctorsList = () => {
  useEffect(() => {
    console.log(assets.doc1);
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl  font-medium ">Top Doctors to Book</div>
      <div className="text-sm font-normal">
        Simply browse through our extensive list of trusted
      </div>
      <div className=" flex flex-wrap w-3xl gap-4   ">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col gap-1  items-start  w-1/4 border-blue-200  border rounded-2xl cursor-pointer transition-transform  ease-in-out hover:-translate-y-2"
          >
            <img
              className="w-48 h-48 bg-blue-200 rounded-tr-2xl rounded-tl-2xl"
              src={doctor?.image}
              alt={doctor?.name}
            />
            <div className="flex flex-col items-start justify-center p-2">
              <div className="text-sm font-medium">{doctor?.name}</div>
              <div className="text-sm text-gray-500">{doctor?.speciality}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
