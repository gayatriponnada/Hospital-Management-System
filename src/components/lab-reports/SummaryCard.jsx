import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Heart Rate",
    "Blood count",
    "Cholesterol",
    "Blood Glucose Level",
    "Saturation",
  ],
  datasets: [
    {
      data: [74, 80 - 90, 225, 85, 83],
      backgroundColor: ["#cfe3ff", "#3b82f6"],
      borderWidth: 0,
      cutout: "70%", // donut thickness
    },
  ],
};

const options = {
  rotation: -90,
  circumference: 180,
  cutout: "70%",
  plugins: {
    legend: {
      display: false, // ❌ disable default legend
    },
  },
};

const Label = ({ color, text, value }) => (
  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
    <span className="text-sm">{text}</span>
    <span className="ml-auto font-semibold">{value}</span>
  </div>
);

const SummaryCard = () => {
  return (
    <div className="bg-white h-screen rounded-lg shadow-md p-4 flex flex-col gap-2">
      <div className=" flex justify-center items-center gap-2">
        <div className="text-sm font-semibold text-primary"> Patient Health Summary</div>
        <div className="tooltip cursor-pointer" data-tip="Moderate Risk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 -960 960 960"
            width="1rem"
            fill="#F19E39"
          >
            <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" />
          </svg>
        </div>
      </div>
      <div className="w-full flex gap-2 items-center">
        {/* CHART */}
        <div className="w-full">
          <Doughnut data={data} options={options} />
        </div>

        {/* LEFT LABELS */}
        <div className="w-full">
          <Label color="#bfdbfe" text="Heart Rate" />
          <Label color="#60a5fa" text="Blood count" />
        </div>

        {/* RIGHT LABELS */}
        <div className="">
          <Label color="#3b82f6" text="Cholesterol" />
          <Label color="#1d4ed8" text="Saturation" />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
