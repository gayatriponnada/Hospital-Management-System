import React from "react";
import { useAuth } from "../../context/AuthContext";

const PatientDetails = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center">
      <div className="flex  gap-10 items-center bg-white rounded-md p-4 w-[95%] shadow-md">
        <div className="flex  justify-start items-center w-[30%] gap-6 border-r border-neutral-content">
          <div
            tabIndex={0}
            role="button"
            className="avatar avatar-placeholder cursor-pointer"
          >
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              <span className="text-lg">{user?.email?.[0]}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Gayatri</div>
            <div className="text-xs text-neutral-content">
              female, 2002 (23years){" "}
            </div>
            <button className="btn text-neutral">
              <span>
                {" "}
                <svg
                  className=" "
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2rem"
                  viewBox="0 -960 960 960"
                  width="1.2rem"
                >
                  <path
                    fill="currentColor"
                    d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"
                  />
                </svg>
              </span>
              Download Reports
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="text-sm font-bold text-primary ">Disorders</div>
          <div className="flex gap-2 justify-start items-center  ">
            <div className="text-neutral">heart disease</div>
            <div className="text-sm bg-base-100 rounded-lg p-1.5 text-neutral  whitespace-nowrap">
              cardic arrest
            </div>
            <div className="text-sm bg-base-100 rounded-lg p-1.5 text-neutral  whitespace-nowrap">
              cardic arrest
            </div>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <div className="text-neutral">heart disease</div>
            <div className="text-sm bg-base-100 rounded-lg p-1.5 text-neutral">
              cardic arrest
            </div>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <div className="text-neutral">heart disease</div>
            <div className="text-sm bg-base-100 rounded-lg p-1.5 text-neutral">
              cardic arrest
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
