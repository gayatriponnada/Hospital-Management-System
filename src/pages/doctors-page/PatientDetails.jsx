import React from "react";
import PatientProfileCard from "../../components/doctor-patient/PatientProfileCard";
import PatientHealthCards from "../../components/doctor-patient/patient-health-cards/PatientHealthCards";
import Prescription from "../../components/doctor-patient/prescription-tab/Prescription";

const PatientDetails = () => {
  return (
    <div className="flex flex-col  gap-4 w-full ">
      <div className="text-xl text-secondary font-semibold">
        Current Appointment
      </div>
      <div className="flex gap-6 w-full">
        <PatientProfileCard />
        <div className="flex flex-col gap-6 w-[70%]">
          <PatientHealthCards />
          <Prescription/>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
