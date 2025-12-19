import React from "react";
import PatientDetails from "../components/lab-reports/PatientDetails";
import PatientHealthDetails from "../components/lab-reports/PatientHealthDetails";
import BloodCard from "../components/lab-reports/BloodCard";
import VitalSignsCard from "../components/lab-reports/VitalSignsCard";
import ChartCard from "../components/lab-reports/ChartCard";
import SummaryCard from "../components/lab-reports/SummaryCard";

const LabReports = () => {
  return (
    <div className="flex gap-4 justify-start items-start h-[80vh] ">
      <PatientHealthDetails />
      <div className="flex flex-col gap-4 w-[20%] h-full">
        <BloodCard />
        <VitalSignsCard />
      </div>
      <div className="flex flex-col w-[40%] gap-4 h-full">
        <ChartCard />
        <SummaryCard />
      </div>
    </div>
    // <div className="flex flex-col gap-4 h-screen">
    //   {/* <PatientDetails /> */}

    //   <div className="flex gap-4 justify-start items-start bg-red-600 ">
    //     <PatientHealthDetails />
    //     <div className="flex flex-col gap-4 w-[20%] h-[76vh]">
    //       <BloodCard />
    //       <VitalSignsCard />
    //     </div>
    //     <div className="flex flex-col w-[40%] gap-4 h-[30vh]">
    //       <ChartCard />
    //       <SummaryCard />
    //     </div>
    //   </div>
    // </div>
  );
};

export default LabReports;
