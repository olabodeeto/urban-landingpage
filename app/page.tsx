"use client";
import Image from "next/image";
import Navbar from "./shared/components/navbar/navbar";
import { useState } from "react";
import BookTripForm from "./shared/components/book-trip-form/book-trip-form";

export default function Home() {
  const [ismovileNavOpen, setismovileNavOpen] = useState(false);

  return (
    <main className="relative">
      <section className="w-full -mt-[6.5rem] 2xl:-mt-40 min-h-[100vh] bg-herobg1 bg-cover py-10 px-4">
        <div className="flex flex-col lg:w-11/12 2xl:w-10/12 m-auto lg:flex-row lg:m-h-[50vh] lg:mt-48 2xl:mt-64">
          <div className="min-h-40 mb-20 lg:mb-0 mt-28 flex flex-col justify-center items-center lg:items-start lg:justify-start lg:mt-0 w-full lg:w-6/12">
            <h2 className="py-1 text-4xl lg:text-5xl xl:text-7xl 2xl:text-[6.5rem] text-white font-creato font-extralight uppercase mb-1">
              Reimagine your
            </h2>
            <h2 className="py-1 text-4xl lg:text-5xl xl:text-7xl 2xl:text-[6.5rem] text-white font-creato font-extrabold mb-1">
              Travel Experience
            </h2>
            <h2 className="py-1 text-4xl lg:text-5xl xl:text-7xl 2xl:text-[6.5rem] text-white font-creato font-extrabold mb-1">
              <span className="font-light">with</span> Urban
            </h2>
            <div className="flex items-center gap-1 mt-2 2xl:mt-6">
              <Image
                src="/assets/ulogo.svg"
                width={25}
                height={25}
                alt=""
                className="2xl:w-14"
              />
              <span className="px-1 italic font-creato font-light text-white lg:text-xl block 2xl:text-4xl">
                Africa's most traveler-centric brand
              </span>
            </div>
            <div className="flex items-center gap-4 mt-6 2xl:mt-10">
              <Image
                src="/assets/appstoreIcon.svg"
                width={140}
                height={40}
                alt=""
                className="lg:w-28 xl:w-40 2xl:w-60"
              />
              <Image
                src="/assets/playstoreIcon.svg"
                width={140}
                height={40}
                alt=""
                className="lg:w-28 xl:w-40 2xl:w-60"
              />
            </div>
          </div>
          <div className="w-full max-h-80 lg:max-h-none lg:w-6/12 lg:flex lg:justify-end">
            <div className="bg-white w-full lg:w-8/12 rounded-2xl min-h-[60vh] p-4">
              <div className="text-xl text-urban-green mt-4 text-center">
                BOOK A TRIP
              </div>
              <div className="w-full mt-4">
                <BookTripForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
