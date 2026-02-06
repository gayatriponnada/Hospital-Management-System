import heart_pluse_img from "../../../assets/heart_pluse_img.jpg";
import body_temp_img from "../../../assets/body_temp_img.png";
import oxygen_img from "../../../assets/oxygen _img.png";
import blood_pressure from "../../../assets/blood_pressure.png";

export const patientHealthSection = [
  {
    id: 6,
    type: "Heart and Health Details",
    label: "Heart Rate",
    value: "80",
    unit: "Bpm",
    placeholder: "Enter Heart Details",
    icon: heart_pluse_img,
  },
  {
    id: 7,
    type: "Body Temperature Details",
    label: "Body Temperature",
    value: "36",
    unit: "°C",
    placeholder: "Enter Body Temperature",
    icon: body_temp_img,
  },
  {
    id: 8,
    type: "Glucose Level Details",
    label: "Glucose Level",
    value: "100",
    unit: "mg/dl",
    placeholder: "Enter Glucose Level",
    icon: oxygen_img,
  },
  {
    id: 9,
    type: "Blood Pressure Details",
    label: "Blood Pressure",
    value: "100",
    unit: "mg/dl",
    placeholder: "Enter Blood Pressure",
    icon: blood_pressure,
  },
  {
    id: 10,
    type: "Blood Oxygen Details",
    label: "Blood Oxygen",
    value: "100",
    unit: "mg/dl",
    placeholder: "Enter Blood Oxygen",
    icon: oxygen_img,
  },
];