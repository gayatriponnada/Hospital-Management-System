import React from "react";
import PatientDetails from "../components/lab-reports/PatientDetails";
import PatientHealthDetails from "../components/lab-reports/PatientHealthDetails";
import BloodCard from "../components/lab-reports/BloodCard";
import VitalSignsCard from "../components/lab-reports/VitalSignsCard";
import ChartCard from "../components/lab-reports/ChartCard";
import SummaryCard from "../components/lab-reports/SummaryCard";

const LabReports = () => {
  return (
    <div className="flex flex-col  gap-4">
      <PatientDetails />
      <div className="flex gap-4 justify-start items-start">
        <PatientHealthDetails />
        <div className="flex flex-col items-center justify-start gap-4 w-[20%] min-h-[30%]">
          <BloodCard />
          <VitalSignsCard />
        </div>
        <div className="flex flex-col w-[40%]  h-[50vh] gap-4">
          <ChartCard />
          <SummaryCard />
        </div>
      </div>
    </div>
  );
};

export default LabReports;
