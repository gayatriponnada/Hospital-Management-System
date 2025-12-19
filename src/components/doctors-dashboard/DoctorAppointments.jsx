import React from "react";

const appointmentsData = [
  {
    id: 1,
    name: "Gayatri Ponnada",
    avatar: "G", // fallback initial
    avatarUrl: "", // optional image url
    appointmentType: "General Checkup",
    doctor: "Dr. Ramesh Kumar",
    date: "2025-01-18",
    time: "09:30 AM",
    status: "Scheduled",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    avatar: "A",
    avatarUrl: "",
    appointmentType: "Cardiology Consultation",
    doctor: "Dr. Meera Rao",
    date: "2025-01-18",
    time: "10:15 AM",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Rahul Verma",
    avatar: "R",
    avatarUrl: "",
    appointmentType: "Blood Test",
    doctor: "Dr. Lab Services",
    date: "2025-01-18",
    time: "11:00 AM",
    status: "Completed",
  },
  {
    id: 4,
    name: "Suresh Patel",
    avatar: "S",
    avatarUrl: "",
    appointmentType: "Orthopedic Review",
    doctor: "Dr. Ajay Singh",
    date: "2025-01-18",
    time: "12:30 PM",
    status: "Scheduled",
  },
  {
    id: 5,
    name: "Neha Iyer",
    avatar: "N",
    avatarUrl: "",
    appointmentType: "Dermatology Follow-up",
    doctor: "Dr. Kavita Menon",
    date: "2025-01-18",
    time: "02:00 PM",
    status: "Cancelled",
  },
];

const DoctorAppointments = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-semibold text-secondary">Today Appointments</div>
      <div className="bg-white rounded-lg p-4 shadow-md w-[30%] max-h-[58vh] overflow-auto">
        <div className="flex flex-col gap-2 w-full">
          {appointmentsData.map((appointment) => (
            <div
              key={appointment.id}
              className=" group flex gap-2 justify-between items-center hover:bg-neutral-content hover:text-white p-2 rounded-lg cursor-pointer"
            >
              <div className="flex gap-2">
                <div>
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-sm">{appointment.avatar}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-normal ">{appointment.name}</div>
                  <div className="text-xs text-neutral group-hover:text-white font-normal ">
                    {appointment.appointmentType}
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold text-neutral ">{appointment.time}</div>
            </div>
          ))}

          {/* <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-24 rounded-full">
              <span className="text-3xl">D</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;
