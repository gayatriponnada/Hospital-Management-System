import React from "react";
import { PatientCards } from "../../../utils/CustomCards";
import heart_pluse_img from "../../../assets/heart_pluse_img.jpg";
import body_temp_img from "../../../assets/body_temp_img.png";
import oxygen_img from "../../../assets/oxygen _img.png";
import blood_pressure from "../../../assets/blood_pressure.png";



const PatientHealthCards = () => {
  return (
    <div className="w-full flex gap-4">
      <PatientCards
        text1="HeartRate"
        text2="80"
        secondaryText="Bpm"
        icon={heart_pluse_img}
      />
      <PatientCards
        text1="Body Temperature"
        text2="36"
        secondaryText="°C"
        icon={body_temp_img}
      />
      <PatientCards
        text1="Gloucose Level"
        text2="100"
        secondaryText="mg/dl"
        icon={oxygen_img}
      />
      <PatientCards
        text1="Blood Pressure"
        text2="100"
        secondaryText="mg/dl"
        icon={blood_pressure}
      />
      <PatientCards
        text1="Blood Oxygen"
        text2="100"
        secondaryText="mg/dl"
        icon={oxygen_img}
      />
    </div>
  );
};

export default PatientHealthCards;
