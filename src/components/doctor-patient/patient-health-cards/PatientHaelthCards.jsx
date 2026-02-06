import { PatientCards } from "./PatientCards";
import { patientHealthSection } from "./PatientHealthSection";

const PatientHealthCards = () => {
  return (
    <div className="w-full flex gap-4">
      {patientHealthSection.map((item) => (
        <PatientCards key={item.id} data={item} />
      ))}
    </div>
  );
};

export default PatientHealthCards;
