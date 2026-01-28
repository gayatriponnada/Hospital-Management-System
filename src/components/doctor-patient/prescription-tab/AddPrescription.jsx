import React from "react";

const AddPrescription = () => {
  const section = [
    { id: 1, label: "Medicine Name", placeholder:" Medicine name" },
    { id: 2, label: "Dosage", placeholder:" Dosage" },
    { id: 3, label: "Frequency", placeholder:" Frequency" },
    { id: 4, label: "Duration", placeholder:" Duration" },
    { id: 5, label: "Timing", placeholder:" Timing" },
    { id: 6, label: "Notes", placeholder:" Notes" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {section.map((item) => (
        <div key={item.id} className="flex flex-col gap-2 w-[45%]">
          <label className="text-sm text-gray-600">{item.label}</label>
          <input
            className=" input outline-none input-neutral "
            type="text"
            placeholder={item.placeholder}
          />
        </div>
      ))}
      <div className="flex justify-end w-full">
        <button
          className="btn bg-success text-white"
          onClick={() => document.getElementById("my_modal_3").close()}
        >
          Add & Save
        </button>
      </div>
    </div>
		
  );
};

export default AddPrescription;
