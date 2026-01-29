export const PrescriptionColumns = () => [
  {
    key: "prId",
    label: "Prescription ID",
    render: (item) => (
      <div
        className="btn font-semibold text-info underline cursor-pointer"
        onClick={() => document?.getElementById("my_modal_4")?.showModal()}
      >
        {item.prId}
      </div>
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
