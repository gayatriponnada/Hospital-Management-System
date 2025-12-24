import React from "react";

const PatientInfoCard = () => {
  const section = [
    {
      label: "Gender",
      details: "Male",
    },
    {
      label: "Blood Type",
      details: "O+",
    },
    {
      label: "Allergies",
      details: "None",
    },
    {
      label: "Diseases",
      details: "Diabetics, Heart Attack,sjgfs,asjdgah",
    },
    {
      label: "Height",
      details: "5.9 ft",
    },
    {
      label: "Weight",
      details: "59 kg",
    },
    {
      label: "Marital Status",
      details: "Single",
    },
    {
      label: "Patient Id",
      details: "123456",
    },
    {
      label: "Last Visit",
      details: "10-12-2024",
    },
  ];

  return (
    <div className="bg-white flex flex-col justify-start items-start gap-2 p-3 rounded-lg h-[44vh] w-[20%] ">
      <div className="text-lg font-semibold text-primary">Information</div>
      <div className="flex flex-col gap-2 w-full  overflow-y-auto  hover-scrollbar  ">
        {section.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-2 w-full"
          >
            <div className="flex gap-2 justify-between text-neutral font-semibold w-full">
              <div className="w-30">{item.label}</div>
              <span>:</span>
            </div>
            <div className=" w-full  " title={item.details}>
              <div className="whitespace-nowrap text-ellipsis  w-30 overflow-hidden  ">
                {" "}
                {item.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientInfoCard;
