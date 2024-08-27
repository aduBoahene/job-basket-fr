"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";
import { MapPin, Search } from "lucide-react";

export const Hero = () => {

  const regions = [
    "Greater Accra","Ashanti Region","Central Region","Eastern Region", "Upper East Region", "Upper West Region"
  ]

  return (
    <div className="w-full lg:h-[70vh] border border-gray-300 bg-gradient-to-r from-blue-100 via-gray-200 to-blue-100">

      <div className="w-full p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-[70vw] lg:mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h3
            className="text-4xl lg:text-5xl text-center lg:text-left"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            There Are <span className="text-blue-600">97,321</span> Postings
          </h3>
          <h3
            className="w-full text-4xl lg:text-5xl text-center lg:text-left lg:mt-2"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Here For You!
          </h3>

          <p
            className="text-gray-400 mt-6 mb-6 text-center lg:text-left"
            style={{ fontFamily: "Poppins-Light" }}
          >
            Find Jobs, Employment & Career Opportunities
          </p>

          <div className="bg-white mb-6 p-4 rounded-md flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
            <div className="flex items-center gap-2 border-b border-gray-300 lg:border-0 pb-2 lg:pb-0">
              <Search />
              <input
                type="text"
                placeholder="job title, keywords..."
                className="border-0 text-gray-400 outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border-b border-gray-300 lg:border-0 pb-2 lg:pb-0">
              <MapPin />
              <select className="text-gray-400 outline-none bg-white">
                <option>city or postcode</option>
                {regions.map((reg, idx) => (
                  <option key={idx}>{reg}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-center lg:justify-end w-full lg:w-auto">
              <button className="bg-blue-600 rounded-lg text-white py-2 px-4">
                Find Jobs
              </button>
            </div>
          </div>

          <p className="text-center lg:text-left" style={{ fontFamily: "Poppins-Light" }}>
            Popular Searches:{" "}
            <span className="text-gray-400" style={{ fontFamily: "Poppins-Light" }}>
              Designer, Developer, Web, IOS, PHP
            </span>
          </p>
        </div>
        <div className="hidden lg:flex lg:w-1/2 justify-center lg:justify-end">
          <Image src="/new.png" alt="" width={400} height={600} />
        </div>
      </div>
    </div>
  );
};

