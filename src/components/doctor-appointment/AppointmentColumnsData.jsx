import ViewButton from "./ViewButton";

export const appointmentColumnsData = () => [
  {
    key: "patient",
    label: "Patient Name",
    render: (item) => (
      <>
        <div className="font-bold text-neutral">{item.patientName}</div>
        <div className="text-sm opacity-50">ID: {item.patientId}</div>
      </>
    ),
  },
  {
    key: "dateTime",
    label: "Date & Time",
    render: (item) => (
      <div className="flex flex-col gap-2">
        <div className="text-neutral">{item.date}</div>
        <span className="badge badge-ghost badge-sm">{item.time}</span>
      </div>
    ),
  },
  {
    key: "reason",
    label: "Reason",
    render: (item) => <div className="text-neutral">{item.reason}</div>,
  },
  {
    key: "status",
    label: "Status",
    render: (item) => (
      <div
        className={`w-[50%] text-center bg text px-4 py-2 rounded-lg ${
          item.status === "Pending"
            ? "text-amber-400"
            : item.status === "Confirmed"
            ? "text-blue-400"
            : item.status === "Completed"
            ? "text-emerald-400"
            : "text-red-400"
        }
           ${
             item.status === "Pending"
               ? "bg-amber-100"
               : item.status === "Confirmed"
               ? "bg-blue-100"
               : item.status === "Completed"
               ? "bg-emerald-100"
               : "bg-red-100"
           }`}
      >
        {item.status}
      </div>
    ),
  },
  {
    key: "action",
    label: "Action",
    render: (item) => <ViewButton item={item} />,
  },
];
