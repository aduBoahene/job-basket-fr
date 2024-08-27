import React from "react";

interface SectionHeaderProps{
    mainTitle: string
    subTitle: string
}

export const SectionHeader = ({mainTitle, subTitle}: SectionHeaderProps) => {
  return (
    <div className="mx-4 mt-8 mb-8 md:mt-16 md:mb-16">
      <div className="m-4 md:flex md:justify-center">
        <h3 className="text-2xl text-center md:text-3xl" style={{fontFamily:"Poppins-Medium"}}>{mainTitle}</h3>
      </div>
      <div className="flex justify-center">
        <p style={{fontFamily:"Poppins-Light"}} className="text-gray-400 text-sm">{subTitle}</p>
      </div>
    </div>
  );
};
