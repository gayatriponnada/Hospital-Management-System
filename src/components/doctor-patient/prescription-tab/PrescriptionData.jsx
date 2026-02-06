import React from "react";

const PrescriptionData = ({ prescription }) => {
  console.log("Prescription Details:", prescription);
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg mb-4">Prescription Details</h3>
          <div className="flex flex-col">
            <div className="flex flex-row w-full justify-start gap-4">
              <div className="w-[30%]">Prescription Id</div>
              <span>:</span>
              <div>{prescription?.prId}</div>
            </div>
            <div className="flex flex-row justify-start gap-4 ">
              <div className="w-[30%]">Medicine Name</div>
              <span>:</span>
              <div>{prescription?.medicineName}</div>
            </div>
            <div className="flex flex-row justify-start gap-4">
              <div className="w-[30%]">Dosage</div>
              <span>:</span>
              <div>{prescription?.dosage}</div>
            </div>

            <div className="flex flex-row justify-start gap-4">
              <div className="w-[30%]">Frequency</div>
              <span>:</span>
              <div>{prescription?.frequency}</div>
            </div>
            <div className="flex flex-row justify-start gap-4">
              <div className="w-[30%]">Duration</div>
              <span>:</span>
              <div>{prescription?.duration}</div>
            </div>
            <div className="flex flex-row justify-start gap-4">
              <div className="w-[30%]">Timing</div>
              <span>:</span>
              <div>{prescription?.timing}</div>
            </div>
            <div className="flex flex-row justify-start gap-4">
              <div className="w-[30%]">Notes</div> <span>:</span>
              <div>{prescription?.notes}</div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PrescriptionData;
