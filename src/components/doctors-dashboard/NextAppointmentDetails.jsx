import React from "react";

const NextAppointmentDetails = () => {
  const section = [
    {
      label: "D.O.B",
      details: "16-10-2002",
    },
    {
      label: "Sex",
      details: "Female",
    },
    {
      label: "Weight",
      details: "55 kg",
    },
    {
      label: "Blood Group",
      details: "B+",
    },
    {
      label: "Height",
      details: "5.6 ft",
    },
    {
      label: "Last Appointment",
      details: "10-12-2024",
    },
    {
      label: "Registration Date",
      details: "12-10-2020",
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-sm font-semibold text-secondary">
        Next Appointment Details
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-md  max-h-[58vh] overflow-auto">
        <div
          data-section="header"
          className="flex gap-2 justify-start items-center"
        >
          <div>
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-10 rounded-full">
                <span className="text-sm">D</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div>name:</div>
            <div>address:</div>
          </div>
        </div>

        <div data-section="middle" className="flex flex-wrap gap-2">
          {section.map((item, index) => (
            <div key={index} className="flex flex-col gap-1 w-[30%]">
              <div className="text-xs text-neutral font-normal">
                {item?.label}
              </div>
              <div className="whitespace-nowrap text-sm text-neutral font-semibold">
                {item?.details}
              </div>
            </div>
          ))}
        </div>
        <div data-section="footer" className="w-full">
          <div className="bg-amber-100 text-amber-300 p-2 rounded-lg w-[18%] text-xs font-normal">
            Asthama
          </div>
        </div>

        <div data-section="footer-btn" className=" flex gap-2">
          <button className="btn px-2 py-0.8 bg-white border border-primary  text-primary hover:bg-primary hover:text-white">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1rem"
                viewBox="0 -960 960 960"
                width="1rem"
                fill="currentColor"
              >
                <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            </span>
            <span>1234567890</span>
          </button>
          <button className="btn px-2 py-0.8 bg-white border border-primary  text-primary hover:bg-primary hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1rem"
              viewBox="0 -960 960 960"
              width="1rem"
              fill="currentColor"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-400q0-33 23.5-56.5T160-720h240l80-80h320q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm73-280h207v-207L233-440Zm-73-40 160-160H160v160Zm0 120v120h640v-480H520v280q0 33-23.5 56.5T440-360H160Zm280-160Z" />
            </svg>
            <span>Documents</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextAppointmentDetails;
