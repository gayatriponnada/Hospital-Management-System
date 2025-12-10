import React from "react";

import Header from "../components/home/Header";
import Speciality from "../components/home/Speciality";
import DoctorsList from "../components/home/DoctorsList";
import CustomHeader from "../utils/CustomHeader";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <Header />
      <Speciality />
      <DoctorsList />
    </div>
  );
};

export default Home;
