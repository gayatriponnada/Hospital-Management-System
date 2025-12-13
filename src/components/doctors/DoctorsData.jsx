import React, { useEffect, useState } from "react";
import { doctors } from "../../assets/assets";

const DoctorsData = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const speciality = id;
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.speciality === speciality
  );

  useEffect(() => {
    console.log("Selected Doctor:", selectedDoctor);
  }, [selectedDoctor]);

  return (
    <div className="drawer drawer-end ">
      <input
        id="my-drawer-5"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={(e) => setOpen(e.target.checked)}
      />
      <div className="drawer-content">
        <div className=" flex flex-wrap  items-center justify-start gap-4   ">
          {(speciality ? filteredDoctors : doctors).map((doctor, index) => (
            <label
              htmlFor="my-drawer-5"
              key={index}
              className="flex flex-col gap-1  items-start w-1/4 border-blue-200  border rounded-2xl cursor-pointer transition-transform  ease-in-out hover:-translate-y-2"
              onClick={() => {
                setSelectedDoctor(doctor.name); 
              }}
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
          className="drawer-overlay closedrawer-side"
        ></label>
        <div className="menu flex flex-col gap-8 bg-base-200 min-h-full w-80 p-4 ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-normal">Book Appointment</h2>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              height="1.1rem"
              viewBox="0 -960 960 960"
              width="1.1rem"
              fill="#434343"
              onClick={() => setOpen(false)}
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>

          <div className="flex flex-col gap-4  overflow-y-auto max-h-[calc(80vh-5rem)] no-scrollbar">
            <div className="flex flex-col gap-2 p-2">
              <label>Appointment Type</label>
              <select
                defaultValue="Select Appointment Type"
                className="select select-primary"
              >
                <option>General Consultation</option>
                <option>General Checkup</option>
                <option>Maternity</option>
                <option>Lab Test</option>
                <option>Vaccination</option>
                <option>Specialist Consultation</option>
                <option>ANT</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <label>Physician</label>
              <select
                className="select select-primary"
                onChange={(e) => setSelectedDoctor(e.target.value)}
                value={selectedDoctor || ""}
              >
                {(speciality ? filteredDoctors : doctors).map(
                  (doctor, index) => (
                    <option key={index} value={doctor.name}>
                      {doctor.name}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <label>Note</label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Enter any specific notes..."
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label>Select Date</label>

              <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                <svg
                  aria-label="Previous"
                  className="fill-current size-4"
                  slot="previous"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  ></path>
                </svg>
                <svg
                  aria-label="Next"
                  className="fill-current size-4"
                  slot="next"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
                <calendar-month></calendar-month>
              </calendar-date>
            </div>
          </div>
          <div>
            <button className="btn text-white btn-primary w-full ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsData;
