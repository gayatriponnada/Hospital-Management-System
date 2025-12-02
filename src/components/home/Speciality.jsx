import React from 'react'
import General_physician from "../../assets/General_physician.svg";
import Gynecologist from "../../assets/Gynecologist.svg";
import Neurologist from "../../assets/Neurologist.svg";
import Pediatricians from "../../assets/Pediatricians.svg";
import Gastroenterologist from "../../assets/Gastroenterologist.svg";
import Dermatologist from "../../assets/Dermatologist.svg";

const categories = [
  { img: General_physician, label: "General Physician" },
  { img: Gynecologist, label: "Gynecologist" },
  { img: Neurologist, label: "Neurologist" },
  { img: Pediatricians, label: "Pediatricians" },
  { img: Gastroenterologist, label: "Gastroenterologist" },
  { img: Dermatologist, label: "Dermatologist" },
];

const Speciality = () => {
	return (
    <div className='flex flex-col  items-center gap-5' >
      <div className="text-2xl  font-medium ">Find by Speciality</div>
      <div>
        <div className='text-sm'>Simply browse through our extensive list of trusted</div>
        <div className=' text-sm'> doctors, schedule your appointment hassle-free.</div>
      </div>
			<div className='flex gap-4 '>
				{categories.map((item,index)=>(
					<div key={index} className=" w-24 flex flex-col gap-1 items-center justify-center transition-transform ease-in-out hover:scale-110 cursor-pointer">
						<img  className="w-24 h-24" src={item.img} alt={item.label} />
						<div className=' text-xs '>{item.label}</div>
					</div>
				))}
			</div>

    </div>
  );
}

export default Speciality