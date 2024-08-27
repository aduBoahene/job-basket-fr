import React, { ReactElement } from "react";

interface CategoryProps{
    title: string
    vacancy: string
    icon: ReactElement
}

export const Category = ({title, vacancy, icon}: CategoryProps) => {
  return (
    <div className="flex gap-4 border-gray-200 border border-2 p-4 mb-8 m-4">
      <div className="bg-gray-200 w-16 h-16 rounded-lg flex justify-center items-center">
        {icon}
      </div>
      <div className="">
        <h3 style={{fontFamily:"Poppins-Medium"}}>{title}</h3>
        <p className="text-gray-400 text-sm" style={{fontFamily:"Poppins-Light"}}>{vacancy}</p>
      </div>
    </div>
  );
};
