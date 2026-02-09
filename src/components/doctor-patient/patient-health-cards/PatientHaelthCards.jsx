import { useState } from "react";
import { PatientCards } from "./PatientCards";
import { patientHealthSection } from "./PatientHealthSection";
import { HealthDetails } from "../../../context/InitialStates";
import { supabase } from "../../../config/supabaseClient";

const PatientHealthCards = () => {
  const [patientHealthDetails, setPatientHealthDetails] =
    useState(HealthDetails);
  console.log("patientHealthDetails", patientHealthDetails);

  const handleDetails = async () => {
    const { error, data } = await supabase
      .from("HealthDetails")
      .insert(patientHealthDetails)
      .select()
      .single();
    if (error) {
      console.error("Insert error:", error);
      return;
    }
    setPatientHealthDetails(data);
  };



  return (
    <div className="w-full flex gap-4">
      {patientHealthSection.map((item) => (
        <PatientCards
          key={item.id}
          data={item}
          //   measuredValue={patientHealthDetails?.[item.name]}
          handleDetails={handleDetails}
          setPatientHealthDetails={setPatientHealthDetails}
          patientHealthDetails={patientHealthDetails}
        />
      ))}
    </div>
  );
};

export default PatientHealthCards;
