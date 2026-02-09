import React from "react";

const HeartAndHealthDetails = ({
  data,
  handleDetails,
  setPatientHealthDetails,
  patientHealthDetails,
  handleUpdate,
}) => {
  const sections = [
    {
      label: "Heart Rate",
      name: "heartRate",
      value: patientHealthDetails?.heartRate,
      placeholder: "Heart Rate",
      width: "28%",
    },
    {
      label: "Blood Count",
      name: "bloodCount",
      value: patientHealthDetails?.bloodCount,
      placeholder: "Blood Count",
      width: "28%",
    },
    {
      label: "Blood Glucose Level After",
      name: "bloodGlucoseLevelAfter",
      value: patientHealthDetails?.bloodGlucoseLevelAfter,
      placeholder: "Blood Glucose Level After",
      width: "28%",
    },
    {
      label: "Blood Glucose Level Before",
      name: "bloodGlucoseLevelBefore",
      value: patientHealthDetails?.bloodGlucoseLevelBefore,
      placeholder: "Blood Glucose Level Before",
      width: "28%",
    },
    {
      label: "Blood Pressure",
      name: "bloodPressure",
      value: patientHealthDetails?.bloodPressure,
      placeholder: "Blood Pressure",
      width: "28%",
    },
    {
      label: "Cholesterol",
      name: "cholesterol",
      value: patientHealthDetails?.cholesterol,
      placeholder: "Cholesterol",
      width: "28%",
    },
    {
      label: "Saturation",
      name: "saturation",
      value: patientHealthDetails?.saturation,
      placeholder: "Saturation",
      width: "28%",
    },
    {
      label: "Thyroid",
      name: "Thyroid",
      value: patientHealthDetails?.Thyroid,
      placeholder: "Thyroid",
      width: "28%",
    },
  ];

  return (
    <dialog
      id={`my_modal_${data?.id}`}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <h3 className="font-semi-bold text-lg text-primary ">{data?.type}</h3>

          <div className="flex flex-wrap gap-4">
            {sections?.map((section, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div className="text-sm text-neutral ">{section?.label}</div>
                <div className="w-full">
                  <input
                    className="input outline-none input-neutral   "
                    value={patientHealthDetails?.[section?.name]}
                    placeholder={section?.placeholder}
                    onChange={(e) => {
                      setPatientHealthDetails({
                        ...patientHealthDetails,
                        [section?.name]: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4 w-full">
            <button
              className="btn bg-success text-white"
              onClick={handleDetails}
            >
              Save
            </button>
            <button className="btn bg-info text-white" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default HeartAndHealthDetails;
