import { createContext, useContext } from "react";

export const PrescriptionInitialState = {
  medicineName: "",
  dosage: null,
  frequency: null,
  duration: null,
  timing: "",
  notes: "",
  prId: null,
  date: null,
};

export const HealthDetails = {
  heartRate: null,
  bloodCount: null,
  cholesterol: null,
  bloodGlucoseLevelAfter: null,
  saturation: null,
  bloodGlucoseLevelBefore: null,
  bloodPressure: null,
  bodyTemperature: null,
  Thyroid: null,
};

export const bookAppointmentDetails = {
  appointmentId: "",
  patientId: "",
  patientName: "",
  patientAge: null,
  patientGender: "",
  doctorId: "",
  doctorName: "",
  specialization: "",
  appointmentType: "",
  appointmentDate: null,
  appointmentTime: "",
  patientNote: "",
  status: "",
};

const InitialStates = createContext();
export const InitialStatesProvider = ({ children }) => {
  return (
    <InitialStates.Provider
      value={{
        PrescriptionInitialState,
        HealthDetails,
        bookAppointmentDetails,
      }}
    >
      {children}
    </InitialStates.Provider>
  );
};
export const useInitialStates = () => useContext(InitialStates);
