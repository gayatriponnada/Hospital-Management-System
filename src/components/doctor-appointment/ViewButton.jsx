import React from "react";

const ViewButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <button className="btn p-4 btn-ghost btn-xs text-neutral hover:text-secondary hover:bg-base-200 border-none">
        View
      </button>

      <div className="menu dropdown-content bg-base-100 rounded-box z-1 w-30 p-2 shadow">
        <div className="flex gap-2 justify-center items-center hover:bg-base-200 p-2 rounded-lg cursor-pointer w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 -960 960 960"
            width="1rem"
            className="text-success"
            fill="currentColor"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
          <div className="text-success ">Accepted</div>
        </div>
        <div className="flex gap-2 justify-center items-center hover:bg-base-200 p-2 rounded-lg cursor-pointer w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 -960 960 960"
            width="1rem"
            className="text-error"
            fill="currentColor"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
          <div className="text-error ">Rejected</div>
        </div>
      </div>
    </div>
  );
};

export default ViewButton;
