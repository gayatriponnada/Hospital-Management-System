import React from "react";
import PatientDetails from "../components/lab-reports/PatientDetails";
import PatientHealthDetails from "../components/lab-reports/PatientHealthDetails";

const LabReports = () => {
  return (
    <div>
      <PatientDetails />
      <PatientHealthDetails />
    </div>
  );
};

export default LabReports;
