import React from "react";

const CustomCards = ({ text1, text2, icon }) => {
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

export default CustomCards;
