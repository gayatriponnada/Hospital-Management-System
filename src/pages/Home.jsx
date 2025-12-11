import React, { useRef } from "react";

import Header from "../components/home/Header";
import Speciality from "../components/home/Speciality";
import DoctorsList from "../components/home/DoctorsList";
import CustomHeader from "../utils/CustomHeader";

const Home = () => {

  const specialtiesSection = useRef(null);

const scrollToSpecialties = () => {
  const yOffset = -90;
  const element = specialtiesSection.current;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

  return (
    <div className="flex flex-col   gap-10 ">
      <Header scrollToSpecialties={scrollToSpecialties} />
      <Speciality specialtiesSection={specialtiesSection} />
      <DoctorsList />
    </div>
  );
};

export default Home;
