import React, { useEffect, useState } from "react";
import CustomTable from "../../utils/CustomTable";
import { appointmentColumnsData } from "../../components/doctor-appointment/AppointmentColumnsData";
import { supabase } from "../../config/supabaseClient";

const DoctorAppointmentDetails = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    const fetchTodayAppointments = async () => {
      const { data, error } = await supabase.from("BookAppointment").select();
      if (data) {
        setAppointmentsData(data);
      } else {
        console.log("error in getting the today appointments", error);
      }
    };
    fetchTodayAppointments();
  }, []);

  return (
    <div>
      <CustomTable columns={appointmentColumnsData()} data={appointmentsData} />
    </div>
  );
};

export default DoctorAppointmentDetails;
