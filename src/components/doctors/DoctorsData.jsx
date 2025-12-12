import React from "react";
import { doctors } from "../../assets/assets";

const DoctorsData = ({ id }) => {
  const speciality = id;
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.speciality === speciality
  );

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className=" flex flex-wrap  items-center justify-start gap-4 ">
          {(speciality ? filteredDoctors : doctors).map((doctor, index) => (
            <label
              htmlFor="my-drawer-5"
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
                <div className="text-sm text-gray-500">
                  {doctor?.speciality}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 min-h-full w-80 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsData;
