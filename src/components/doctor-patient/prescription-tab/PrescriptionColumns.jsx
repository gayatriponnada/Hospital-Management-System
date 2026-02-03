export const PrescriptionColumns = (onPrIdClick) => [
  {
    key: "prId",
    label: "Prescription ID",
     render: (item) => (
      <button
        className="text-blue-600 underline cursor-pointer"
        onClick={() => onPrIdClick(item)}
      >
        {item.prId}
      </button>
    ),
  },
  {
    key: "date",
    label: "Date",
    render: (item) => <>{item.date}</>,
  },
  {
    key: "duration",
    label: "Duration",
    render: (item) => <>{item.duration}</>,
  },
];
