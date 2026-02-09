import heart_pluse_img from "../../../assets/heart_pluse_img.jpg";
import body_temp_img from "../../../assets/body_temp_img.png";
import oxygen_img from "../../../assets/oxygen _img.png";
import blood_pressure from "../../../assets/blood_pressure.png";

export const patientHealthSection = [
  {
    id: 6,
    name: "heartRate",
    type: "Heart and Health Details",
    label: "Heart Rate",
    // measuredValue: "80",
    unit: "Bpm",
    placeholder: "Enter Heart Details",
    icon: heart_pluse_img,
  },
  {
    id: 7,
    name: "bodyTemperature",
    type: "Body Temperature Details",
    label: "Body Temperature",
    // measuredValue: "36",
    unit: "°C",
    placeholder: "Enter Body Temperature",
    icon: body_temp_img,
  },
  {
    id: 8,
    name: "bloodGlucoseLevelAfter",
    type: "Glucose Level Details",
    label: "Glucose Level",
    // measuredValue: "100",
    unit: "mg/dl",
    placeholder: "Enter Glucose Level",
    icon: oxygen_img,
  },
  {
    id: 9,
    name: "bloodPressure",
    type: "Blood Pressure Details",
    label: "Blood Pressure",
    // measuredValue: "100",
    unit: "mg/dl",
    placeholder: "Enter Blood Pressure",
    icon: blood_pressure,
  },
  {
    id: 10,
    name: "saturation",
    type: "Blood Oxygen Details",
    label: "Blood Oxygen",
    // measuredValue: "100",
    unit: "mg/dl",
    placeholder: "Enter Blood Oxygen",
    icon: oxygen_img,
  },
];
