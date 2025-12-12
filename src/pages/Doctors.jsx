import React from "react";
import SpecialityList from "../components/doctors/SpecialityList";
import DoctorsData from "../components/doctors/DoctorsData";
import { useParams } from "react-router-dom";

const Doctors = () => {
  const { id } = useParams();

  return (
    <div className="flex gap-10">
      <SpecialityList id={id} />
      <div className="w-full max-h-[90vh] overflow-auto no-scrollbar">
        <DoctorsData id={id} />
      </div>
    </div>
  );
};

export default Doctors;
