import React from "react";

const BloodCard = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 bg-white h-[29.5vh] w-full p-4 rounded-lg shadow-md">
      <div className="text-sm font-semibold">Blood Sugar</div>
      <div className="flex justify-center w-full">
        <div
          className="radial-progress text-warning"
          style={{ "--value": 70 } /* as React.CSSProperties */}
          aria-valuenow={70}
          role="progressbar"
        >
          126
          <span className="text-xs text-base-300">mg/dL</span>
        </div>
      </div>
    </div>
  );
};

export default BloodCard;
