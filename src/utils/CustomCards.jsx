import React from "react";

export const CustomCards = ({ text1, text2, icon }) => {
  return (
    <div className="bg-white rounded-lg w-[20%] h-[20vh] p-2 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex  justify-start items-center gap-8 w-full h-full p-6">
        <div className="bg-base-100 p-2 rounded-lg">{icon}</div>
        <div className="flex flex-col gap-2">
          <div className="font-normal text-sm text-secondary whitespace-nowrap">
            {text1}
          </div>
          <div className=" text-neutral text-2xl font-semibold">{text2}</div>
        </div>
      </div>
    </div>
  );
};

// export const PatientCards = ({
//   icon,
//   text1,
//   text2,
//   secondaryText,
//   type,
//   id,
//   placeholder,
// }) => {
//   return (
//     <div className="bg-white rounded-lg w-[20%] h-[20vh] p-2  shadow-md hover:shadow-lg transition-shadow duration-300">
//       <div className="flex flex-col gap-2 justify-center items-center">
//         <div className="flex  justify-center w-full relative">
//           <img className=" h-10" src={icon} alt="icon" />

//           <svg
//             onClick={() =>
//               document.getElementById(`my_modal_${id}`).showModal()
//             }
//             className="cursor-pointer absolute right-0"
//             xmlns="http://www.w3.org/2000/svg"
//             height="1rem"
//             viewBox="0 -960 960 960"
//             width="1rem"
//             fill="#666666"
//           >
//             <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
//           </svg>

//           <dialog
//             id={`my_modal_${id}`}
//             className="modal modal-bottom sm:modal-middle"
//           >
//             <div className="modal-box">
//               <form method="dialog">
//                 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                   ✕
//                 </button>
//               </form>
//               <div className="flex flex-col gap-4">
//                 <h3 className="font-semi-bold text-lg text-primary ">{type}</h3>
//                 <input placeholder={placeholder} />
//               </div>
//             </div>
//           </dialog>
//         </div>
//         <div className="font-normal text-sm text-neutral whitespace-nowrap">
//           {text1}
//         </div>
//         <div className="flex gap-0.5 justify-center items-center">
//           <span className=" text-neutral text-2xl font-semibold">{text2}</span>
//           <span className=" text-neutral text-xs font-semibold">
//             {secondaryText}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
