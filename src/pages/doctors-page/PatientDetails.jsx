import React from "react";
import PatientProfileCard from "../../components/doctor-patient/PatientProfileCard";
import PatientInfoCard from "../../components/doctor-patient/PatientInfoCard";

const PatientDetails = () => {
  return (
    <div className="flex flex-col  gap-4 w-full ">
      <div className="text-xl text-secondary font-semibold">
        Current Appointment
      </div>
      <div className="flex gap-4 flex-col h-full">
        <PatientProfileCard />
        <PatientInfoCard />
      </div>
    </div>
  );
};

export default PatientDetails;
