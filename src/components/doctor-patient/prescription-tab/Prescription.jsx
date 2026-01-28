import React from 'react'

const Prescription = () => {
	return (
    <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4">
      <div className="text-lg font-semibold text-primary">Prescription</div>
      <div className="flex gap-1 p-2 border-2 border-dashed border-gray-300 rounded-lg justify-center items-center cursor-pointer text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1rem"
          viewBox="0 -960 960 960"
          width="1rem"
          fill="currentColor"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        Add a prescription
      </div>
    </div>
  );
}

export default Prescription