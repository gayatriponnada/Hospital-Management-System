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
        <h3 className="font-bold text-lg mb-4">Prescription Details</h3>
        <div>
          <div>Prescription Id</div>
          <div>{prescription?.prId}</div>
        </div>
       <div className="space-y-4">
          
              <div><strong>Medicine Name:</strong> {prescription?.medicineName}</div>
              <div><strong>Dosage:</strong> {prescription?.dosage}</div>
              <div><strong>Frequency:</strong> {prescription?.frequency}</div>
              <div><strong>Duration:</strong> {prescription?.duration}</div>
              <div><strong>Timing:</strong> {prescription?.timing}</div>
              <div><strong>Notes:</strong> {prescription?.notes}</div>
            </div>
         
      
      </div>
      
    </dialog>
  );
};

export default PrescriptionData;
