// src/components/Carousel.js
'use client'

import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle card active
  const cards = [1, 2, 3, 4, 5]; // Example card data

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full md:h-[70vh] md:border border-2 md:flex justify-between">
    {/* <div className="flex items-center justify-center h-screen"> */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(activeIndex - 1) * 33.3333}%)` }}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-1/4 flex-shrink-0 ${index === activeIndex ? 'scale-100' : 'scale-75'} transition-transform duration-500`}
            >
              <div className={`p-4 ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'} h-64 flex items-center justify-center`}>
                <h2 className="text-white text-2xl">Card {card}</h2>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Prev
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Next
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Carousel;
