import React from "react";

const PrescriptionData = ({ prescriptionDetails }) => {
  console.log("Prescription Details:", prescriptionDetails);
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4">Prescription Details</h3>
        <div>
          <div>Prescription Id</div>
          <div>{prescriptionDetails?.notes}</div>
        </div>
      </div>
    </dialog>
  );
};

export default PrescriptionData;
