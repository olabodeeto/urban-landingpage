import React from "react";
import Image from "next/image";

export default function BookTripForm() {
  return (
    <div className="px-4">
      <div className="flex items-center">
        <Image
          src="./assets/timline.svg"
          width={10}
          height={40}
          alt=""
          className="lg:w-28 xl:w-6 2xl:w-60"
        />
        <div></div>
      </div>
    </div>
  );
}
