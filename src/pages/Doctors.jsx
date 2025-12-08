import React from "react";
import SpecialityList from "../components/doctors/SpecialityList";
import DoctorsData from "../components/doctors/DoctorsData";

const Doctors = () => {
  return (
    <div className="flex gap-10">
      <SpecialityList />
      <DoctorsData />
    </div>
  );
};

export default Doctors;
