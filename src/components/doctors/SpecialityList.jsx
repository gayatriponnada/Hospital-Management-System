import React from "react";
import { useNavigate } from "react-router-dom";

const SpecialityList = ({ id }) => {
  const navigate = useNavigate();

  const buttons = [
    {
      id: 1,
      name: "Gastroenterologist",
    },
    {
      id: 2,
      name: "GeneralPhysician",
    },
    {
      id: 3,
      name: "Gynecologist",
    },
    {
      id: 4,
      name: "Dermatologist",
    },
    {
      id: 5,
      name: "Pediatricians",
    },
    {
      id: 6,
      name: "Neurologist",
    },
  ];

  const handleClick = (name) => {
    id = name;
    navigate(`/patient/dashboard/all-doctors/${id}`);
  };

  return (
    <div className="flex  flex-col gap-4 w-[40%]  ">
      {buttons.map((button) => {
        const isActive = id === button.name;
        return (
          <button
            key={button.id}
            className={`text-left p-1.5 text-sm text-gray-500 border-(--border-primary) border rounded cursor-pointer
            ${isActive?' bg-blue-200 text-white font-semibold border-blue-200':''}`}
            onClick={() => handleClick(button.name)}
          >
            {button.name}
          </button>
        );
      })}
    </div>
  );
};

export default SpecialityList;
