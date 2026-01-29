export const PrescriptionColumns = () => [
  {
    key: "prId",
    label: "Prescription ID",
    render: (item) => <>{item.prId}</>,
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
