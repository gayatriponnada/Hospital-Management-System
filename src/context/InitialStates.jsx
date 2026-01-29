import { createContext, useContext } from "react";

export const PrescriptionInitialState = {
  medicineName: "",
  dosage: "",
  frequency: "",
  duration: "",
  timing: "",
  notes: "",
  prId: "",
  date: "",
};

const InitialStates = createContext();
export const InitialStatesProvider = ({ children }) => {
  return (
    <InitialStates.Provider value={{ PrescriptionInitialState }}>
      {children}
    </InitialStates.Provider>
  );
};
export const useInitialStates = () => useContext(InitialStates);
