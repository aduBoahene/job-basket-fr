import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";


export const CallAction = () => {
  return (
    <div className="mt-12 mb-8 p-4 md:p-8">
      <div className="md:w-[70vw] md:mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/2">
          <Image
            src="/pexels-ekaterina-bolovtsova-4049870.jpg"
            width="500"
            height="200"
            alt=""
            className="w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h3
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Millions of Jobs. Find the
          </h3>
          <h3
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            one that suits you
          </h3>

          <p className="mt-4 md:mt-8 mb-2 text-lg md:text-xl text-gray-400">
            Search all the open positions on the web. Get your own
          </p>

          <p className="mt-2 text-lg md:text-xl text-gray-400">
            personalized salary estimate. Read reviews on over 600,000
          </p>

          <p className="mt-2 text-lg md:text-xl text-gray-400">
            companies worldwide
          </p>

          <div className="flex flex-col md: gap-4 mt-4 md:mt-8">
  <div className="flex items-center gap-4">
    <Check />
    <span className="text-gray-500">Bring to the table win-win survival</span>
  </div>
  <div className="flex items-center gap-4 mt-4 md:mt-0">
    <Check />
    <span className="text-gray-500">Capitalize on low-hanging fruit to identify</span>
  </div>
  <div className="flex items-center gap-4 mt-4 md:mt-0">
    <Check />
    <span className="text-gray-500">But I must explain to you how all this</span>
  </div>
</div>


          <button className="mt-4 md:mt-8 bg-blue-600 text-white py-2 px-4 rounded-md">Get Started</button>
        </div>
      </div>
    </div>
  );
};




