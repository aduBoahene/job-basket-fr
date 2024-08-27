import Image from "next/image";
import React from "react";

export const Partners = () => {
  return (
    <div className="border-2 mt-12 mb-8 p-4 md:p-8">
      <div className="md:w-[70vw] md:mx-auto flex flex-wrap justify-around gap-8 md:gap-16">
        <Image src="/uber.svg" width="120" height="120" alt="Uber" className="w-24 h-24 md:w-30 md:h-30" />
        <Image src="/spotify.svg" width="120" height="120" alt="Spotify" className="w-24 h-24 md:w-30 md:h-30" />
        <Image src="/github.svg" width="120" height="120" alt="GitHub" className="w-24 h-24 md:w-30 md:h-30" />
        <Image src="/coin.svg" width="120" height="120" alt="Coin" className="w-24 h-24 md:w-30 md:h-30" />
      </div>
    </div>
  );
};
