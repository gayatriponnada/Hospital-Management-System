import { useEffect } from "react";
import { supabase } from "../../../config/supabaseClient";
import HeartAndHealthDetails from "./HeartandHealthDetails";

export const PatientCards = ({
  data,
  handleDetails,
  setPatientHealthDetails,
  patientHealthDetails,
}) => {
  const { id, type, label, unit, placeholder, icon, name } = data || {};

  useEffect(() => {
    const fetchHealthDetails = async () => {
      const { data, error } = await supabase
        .from("HealthDetails")
        .select()
        .single();
      if (error) {
        console.error("Supabase error:", error);
      } else {
        setPatientHealthDetails(data);
        console.log("patientHealthDetails?.[name]", patientHealthDetails);
      }
    };
    fetchHealthDetails();
  }, []);

  const handleUpdate = async () => {
    if (!patientHealthDetails?.id) {
      console.error("Update skipped: missing ID");
      return;
    }

    const { data, error } = await supabase
      .from("HealthDetails")
      .update(patientHealthDetails)
      .eq("id", patientHealthDetails?.id)
      .select()
      .single();
    document.getElementById(`my_modal_${id}`).close();

    if (error) {
      console.error("Update error:", error);
      return;
    }

    setPatientHealthDetails(data);
  };

  return (
    <div className="bg-white rounded-lg w-[20%] h-[20vh] p-2 shadow-md hover:shadow-lg">
      <div className="flex flex-col gap-2 items-center">
        <div className="relative w-full flex justify-center">
          <img className="h-10" src={icon} alt="icon" />

          <svg
            onClick={() =>
              document.getElementById(`my_modal_${id}`).showModal()
            }
            className="cursor-pointer absolute right-0"
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            width="1rem"
            viewBox="0 -960 960 960"
            fill="#666"
          >
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
          </svg>
        </div>

        <div className="text-sm text-neutral">{label}</div>

        <div className="flex items-center gap-1">
          <div className="text-2xl font-semibold">
            {patientHealthDetails?.[name]}
          </div>
          <span className="text-xs font-semibold">{unit}</span>
        </div>

        {id == 6 ? (
          <HeartAndHealthDetails
            data={data}
            patientHealthDetails={patientHealthDetails}
            setPatientHealthDetails={setPatientHealthDetails}
            handleDetails={handleDetails}
            handleUpdate={handleUpdate}
          />
        ) : (
          <dialog
            id={`my_modal_${id}`}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="font-semi-bold text-lg text-primary ">{type}</h3>

              <input
                className="input outline-none input-neutral w-full"
                value={patientHealthDetails?.[name]}
                placeholder={placeholder}
                onChange={(e) => {
                  setPatientHealthDetails({
                    ...patientHealthDetails,
                    [name]: e.target.value,
                  });
                }}
              />
              <button className="btn" onClick={handleDetails}>
                Save
              </button>
              <button className="btn" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};
