import React from "react";

const SpecialityList = () => {
  return (
    <div className="flex  flex-col gap-4 w-[40%]  ">
      <button className="text-left p-1.5 text-sm text-gray-500  border-(--border-primary) border rounded cursor-pointer">
        Gastroenterologist
      </button>
      <button className="text-left p-1.5 text-sm text-gray-500 border-(--border-primary) border rounded cursor-pointer">
        General physician
      </button>
      <button className="text-left p-1.5 text-sm text-gray-500 border-(--border-primary) border rounded cursor-pointer">
        Gynecologist
      </button>
      <button className="text-left p-1.5 text-sm text-gray-500 border-(--border-primary) border rounded cursor-pointer">
        Dermatologist
      </button>
      <button className="text-left p-1.5 text-sm text-gray-500 border-(--border-primary) border rounded cursor-pointer">
        Pediatricians
      </button>
      <button className="text-left p-1.5 text-sm text-gray-500 border-(--border-primary) border rounded cursor-pointer">
        Neurologist
      </button>
    </div>
  );
};

export default SpecialityList;
