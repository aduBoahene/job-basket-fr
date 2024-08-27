import React from "react";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";

export const Articles = () => {
  const det = [
    {
      mainTitle: "Ttract Sales And Profits",
      des: "A job ravenously while Far much that one rank beheld after outside",
    },
    {
      mainTitle: "5 Tips For Your Job Interviews",
      des: "A job ravenously while Far much that one rank beheld after outside",
    },
    {
      mainTitle: "The Evening of The Holiday",
      des: "A job ravenously while Far much that one rank beheld after outside",
    },
  ];

  return (
    <div className="bg-gray-200 pt-4 md:pt-8">
      <SectionHeader
        mainTitle="Recent News Articles"
        subTitle="Fresh Job related content posted each day"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:px-8 lg:px-16 xl:px-32">
        {det.map((item, idx) => (
          <ArticleCard key={idx} mainTitle={item.mainTitle} des={item.des} />
        ))}
      </div>
    </div>
  );
};

interface ArticleCardProps {
  mainTitle: string;
  des: string;
}

function ArticleCard({ mainTitle, des }: ArticleCardProps) {
  return (
    <div className="border border-gray-300 p-4 md:p-8 bg-white rounded-md">
      <Image
        src="/pexels-ekaterina-bolovtsova-4049870.jpg"
        width={400}
        height={100}
        alt=""
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div
        className="flex flex-row gap-2 text-sm mt-4 text-gray-600"
        style={{ fontFamily: "Poppins-Light" }}
      >
        <span>April 26, 2021</span>
        <span>Education</span>
        <span>1 Comment</span>
      </div>

      <h5
        className="text-xl mt-4 mb-2"
        style={{ fontFamily: "Poppins-Medium" }}
      >
        {mainTitle}
      </h5>
      <p className="text-gray-400">{des}</p>
      <div className="mt-4 flex gap-2 text-blue-600 cursor-pointer">
        <span>Read More</span>
        <span>{">"}</span>
      </div>
    </div>
  );
}
