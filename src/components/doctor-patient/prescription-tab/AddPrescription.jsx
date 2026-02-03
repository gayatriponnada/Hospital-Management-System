import React, { useEffect } from "react";
import { PrescriptionInitialState } from "../../../context/InitialStates";
import { supabase } from "../../../config/supabaseClient";

const AddPrescription = ({
  detailsList,
  setDetailsList,
  prescriptionDetails,
  setPrescriptionDetails,
}) => {
  useEffect(() => {
    console.log("Updated prescription list:", detailsList);
    console.log(" prescription list:", prescriptionDetails);
  }, [detailsList, prescriptionDetails]);

  const section = [
    {
      id: 1,
      name: "medicineName",
      label: "Medicine Name",
      placeholder: " Medicine name",
      value: prescriptionDetails?.medicineName,
      type: "text",
    },
    {
      id: 2,
      name: "dosage",
      label: "Dosage",
      placeholder: " Dosage",
      value: prescriptionDetails?.dosage,
      type: "number",
    },
    {
      id: 3,
      name: "frequency",
      label: "Frequency",
      placeholder: " Frequency",
      value: prescriptionDetails?.frequency,
      type: "number",
    },
    {
      id: 4,
      name: "duration",
      label: "Duration",
      placeholder: " Duration",
      value: prescriptionDetails?.duration,
      type: "number",
    },
    {
      id: 5,
      name: "timing",
      label: "Timing",
      placeholder: " Timing",
      value: prescriptionDetails?.timing,
      type: "text",
    },
    {
      id: 6,
      name: "notes",
      label: "Notes",
      placeholder: " Notes",
      value: prescriptionDetails?.notes,
      type: "text",
    },
  ];



useEffect(() => {
  const fetchPrescriptions = async () => {
    const { data, error } = await supabase
      .from("prescriptionData")
      .select();

    if (error) {
      console.error("Supabase error:", error);
    } else {
      setDetailsList(data);
      console.log("Grouped prescriptions:", data);
    }
  };

  fetchPrescriptions();
}, []);



  const handleClick = async() => {
   const newPrescription = {
    ...prescriptionDetails,
    prId: `PR${detailsList.length + 1}`,
    date: new Date().toLocaleDateString(),
  };

  const { data, error } = await supabase
    .from("prescriptionData")
    .insert([newPrescription])
    .select();

  if (error) {
    console.error("Insert error:", error);
    return;
  }
  setDetailsList((prev) => [...prev, ...data]);
    setPrescriptionDetails({
      ...prescriptionDetails,
      prId: `PR${detailsList.length + 1}`,
      date: new Date().toLocaleDateString(),
    });
    setPrescriptionDetails({
      medicineName: "",
      dosage: "",
      frequency: "",
      duration: "",
      timing: "",
      notes: "",
    });
    document.getElementById("my_modal_3").close();
  };

  return (
    <div className="flex flex-wrap gap-4">
      {section.map((item) => (
        <div key={item.id} className="flex flex-col gap-2 w-[45%]">
          <label className="text-sm text-gray-600">{item.label}</label>
          <input
            className=" input outline-none input-neutral "
            type={item?.type}
            placeholder={item.placeholder}
            value={item.value}
            onChange={(e) => {
              setPrescriptionDetails({
                ...prescriptionDetails,
                [item?.name]: e.target.value,
              });
            }}
          />
        </div>
      ))}
      <div className="flex justify-end w-full">
        <button className="btn bg-success text-white" onClick={handleClick}>
          Add & Save
        </button>
      </div>
    </div>
  );
};

export default AddPrescription;
