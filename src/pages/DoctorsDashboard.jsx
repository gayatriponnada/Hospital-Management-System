import React from "react";
import DoctorCards from "../components/doctors-dashboard/DoctorCards";
import DoctorAppointments from "../components/doctors-dashboard/DoctorAppointments";

const DoctorsDashboard = () => {
  return (
    <div className="flex flex-col gap-2 h-[85vh]">
      <DoctorCards />
      <DoctorAppointments />
    </div>
  );
};

export default DoctorsDashboard;
