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

const InitialStates = createContext();
export const InitialStatesProvider = ({ children }) => {
  return (
    <InitialStates.Provider value={{ PrescriptionInitialState }}>
      {children}
    </InitialStates.Provider>
  );
};
export const useInitialStates = () => useContext(InitialStates);
