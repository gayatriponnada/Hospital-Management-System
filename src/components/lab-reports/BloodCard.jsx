import React from "react";

const BloodCard = ({ patientHealthDetails }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 bg-white h-full p-4 rounded-lg shadow-md">
      <div className="text-sm font-semibold text-primary">
        Blood Sugar (Before)
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div
          className="radial-progress text-warning"
          style={{ "--value": 70 } /* as React.CSSProperties */}
          aria-valuenow={70}
          role="progressbar"
        >
          {patientHealthDetails?.bloodGlucoseLevelBefore}
          <span className="text-xs text-base-300">mg/dL</span>
        </div>
      </div>
    </div>
  );
};

export default BloodCard;
