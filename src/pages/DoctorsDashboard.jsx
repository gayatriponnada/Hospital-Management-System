import React from "react";
import DoctorCards from "../components/doctors-dashboard/DoctorCards";
import DoctorAppointments from "../components/doctors-dashboard/AppointmentsDetailsCard";
import AppointmentRequestCard from "../components/doctors-dashboard/AppointmentRequestCard";
import NextAppointmentDetails from "../components/doctors-dashboard/NextAppointmentDetails";

const DoctorsDashboard = () => {
  return (
    <div className="flex flex-col gap-4 h-[85vh]">
      <DoctorCards />
      <div className="flex w-[full] h-[full] gap-2">
        <DoctorAppointments />
        <AppointmentRequestCard />
        <NextAppointmentDetails />
      </div>
    </div>
  );
};

export default DoctorsDashboard;
