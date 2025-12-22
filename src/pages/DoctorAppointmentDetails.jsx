import React from "react";
import CustomTable from "../utils/CustomTable";
import { appointmentColumnsData } from "../components/doctor-appointment/AppointmentColumnsData";

const DoctorAppointmentDetails = () => {
  const patientsDetails = [
    {
      id: "A001",
      patientId: "P1001",
      patientName: "Ananya Sharma",
      doctorId: "D2001",
      date: "2025-09-15",
      time: "10:00 AM",
      reason: "Routine Checkup",
      status: "Pending",
    },
    {
      id: "A002",
      patientId: "P1002",
      patientName: "Ramesh Kumar",
      doctorId: "D2001",
      date: "2025-09-15",
      time: "10:30 AM",
      reason: "Fever and Cold",
      status: "Confirmed",
    },
    {
      id: "A003",
      patientId: "P1003",
      patientName: "Priya Verma",
      doctorId: "D2001",
      date: "2025-09-15",
      time: "11:00 AM",
      reason: "Blood Pressure Issue",
      status: "Completed",
    },
    {
      id: "A004",
      patientId: "P1004",
      patientName: "Suresh Reddy",
      doctorId: "D2002",
      date: "2025-09-16",
      time: "09:30 AM",
      reason: "Diabetes Follow-up",
      status: "Pending",
    },
    {
      id: "A005",
      patientId: "P1005",
      patientName: "Kavya Nair",
      doctorId: "D2002",
      date: "2025-09-16",
      time: "10:15 AM",
      reason: "Pregnancy Consultation",
      status: "Cancelled",
    },
    {
      id: "A006",
      patientId: "P1006",
      patientName: "Arjun Patel",
      doctorId: "D2001",
      date: "2025-09-17",
      time: "11:30 AM",
      reason: "Stomach Pain",
      status: "Confirmed",
    },
  ];

  return (
    <div>
      <CustomTable columns={appointmentColumnsData} data={patientsDetails} />
    </div>
  );
};

export default DoctorAppointmentDetails;
