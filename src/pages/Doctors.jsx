import React from "react";
import SpecialityList from "../components/doctors/SpecialityList";
import DoctorsData from "../components/doctors/DoctorsData";
import { useParams } from "react-router-dom";

const Doctors = () => {
const { id } = useParams();

  return (
    <div className="flex gap-10">
      <SpecialityList id={id} />
      <DoctorsData id={id} />
    </div>
  );
};

export default Doctors;
