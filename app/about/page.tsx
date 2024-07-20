import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Aboutpage() {
  return (
    <main className="relative ">
      <section className="w-full -mt-[7.5rem] 2xl:-mt-40 min-h-[55vh] bg-heroAbout bg-cover py-10 px-4 ">
        <div className="flex flex-col lg:w-11/12 2xl:w-10/12 m-auto lg:flex-row lg:m-h-[50vh] lg:mt-40 2xl:mt-60"></div>
      </section>

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20">
        <section className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 mb-10">
            <div className="flex items-center gap-4 cursor-pointer">
              <ArrowBackIcon sx={{ color: "#036E03" }} />
              <span className="text-xl font-creato text-urban-black font-bold">
                About Us
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-xl font-creato font-bold">Quick Links:</span>
            <div className="mt-4 text-sm">
              <div className="flex items-center gap-4 flex-wrap mb-2">
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Our Vision
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Fleet Partners
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Park Partners
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Traveler's Club
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Traveler's Kits Store
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Hotels
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Urban Cards
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ---------------- about --------------- */}
      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-20">
        <section className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato">
            We are{" "}
            <span className=" text-urban-green font-extrabold">Urban</span>
          </h2>
          <p className="mt-4 leading-8 lg:leading-10 text-base lg:text-xl font-creato font-light">
            Urban is an equal opportunities platform that promotes and value
            diversity. Team members are welcomed from various backgrounds and
            cultures with a range of skills and experiences, all sharing the
            Urban brand ethos and passion for their work. Together, we create
            magic. We are a travel masterpiece brand executed with jaw-dropping
            skill and attention to detail.
          </p>
        </section>
      </div>
      {/* ------------------------------------------ */}
    </main>
  );
}
