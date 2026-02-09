import React, { useEffect, useState } from "react";
import PatientDetails from "../../components/lab-reports/PatientDetails";
import PatientHealthDetails from "../../components/lab-reports/PatientHealthDetails";
import BloodCard from "../../components/lab-reports/BloodCard";
import VitalSignsCard from "../../components/lab-reports/VitalSignsCard";
import ChartCard from "../../components/lab-reports/ChartCard";
import SummaryCard from "../../components/lab-reports/SummaryCard";
import { HealthDetails } from "../../context/InitialStates";
import { supabase } from "../../config/supabaseClient";

const LabReports = () => {
  const [patientHealthDetails, setPatientHealthDetails] =
    useState(HealthDetails);

  const fetchPatientDetails = async () => {
    const { data, error } = await supabase
      .from("HealthDetails")
      .select()
      .single();

    if (data) {
      setPatientHealthDetails(data);
    } else {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchPatientDetails();
  }, [patientHealthDetails]);

  return (
    <div className="flex gap-4 justify-start items-start h-[80vh] ">
      <PatientHealthDetails patientHealthDetails={patientHealthDetails} />
      <div className="flex flex-col gap-4 w-[20%] h-full">
        <BloodCard patientHealthDetails={patientHealthDetails} />
        <VitalSignsCard patientHealthDetails={patientHealthDetails} />
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
