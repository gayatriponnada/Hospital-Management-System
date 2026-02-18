import React, { useEffect, useState } from "react";
import { supabase } from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const AppointmentsDetailsCard = () => {
  const navigate = useNavigate();

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
  }, [appointmentsData]);
  // console.log("id in app", id);

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="text-sm font-semibold text-secondary">
        Today Appointments
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md  max-h-[56vh] overflow-auto hover-scrollbar">
        <div className="flex flex-col gap-2 w-full">
          {appointmentsData.map((appointment) => (
            <div
              onClick={() =>
                navigate(`/doctor/patient/${appointment?.patientId}`)
              }
              key={appointment.id}
              className=" group flex gap-2 justify-between items-center hover:bg-neutral-content hover:text-white p-2 rounded-lg cursor-pointer"
            >
              <div className="flex gap-2">
                <div>
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-sm">
                        {appointment.patientName?.[0]}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-normal ">
                    {appointment.patientName}
                  </div>
                  <div className="text-xs text-neutral group-hover:text-white font-normal ">
                    {appointment.appointmentType}
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold text-neutral ">
                {appointment.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsDetailsCard;
