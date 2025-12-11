import React from "react";
import { doctors } from "../../assets/assets";

const DoctorsData = ({ id }) => {
  const speciality = id;
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.speciality === speciality
  );


  return (
    <div className="w-[90%]">
      <div className=" flex flex-wrap  items-center justify-start gap-4   ">
        {(speciality ? filteredDoctors : doctors).map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col gap-1  items-start w-1/4 border-blue-200  border rounded-2xl cursor-pointer transition-transform  ease-in-out hover:-translate-y-2"
          >
            <img
              className="w-full h-56 bg-blue-200 rounded-tr-2xl rounded-tl-2xl"
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

export default DoctorsData;
