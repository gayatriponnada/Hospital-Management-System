import React from "react";
import PatientDetails from "../components/lab-reports/PatientDetails";
import PatientHealthDetails from "../components/lab-reports/PatientHealthDetails";

const LabReports = () => {
  return (
    <div className="flex flex-col gap-4">
      <PatientDetails />
      <PatientHealthDetails />
    </div>
  );
};

export default LabReports;
