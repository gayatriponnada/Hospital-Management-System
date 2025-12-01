import React from "react";

import Header from "../components/home/Header";
import Speciality from "../components/home/Speciality";
import DoctorsList from "../components/home/DoctorsList";

const Home = () => {
  return (
    <>
      <Header />
      <Speciality/>
      <DoctorsList/>
    </>
  );
};

export default Home;
