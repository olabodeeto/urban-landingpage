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
            <div className="flex items-center gap-10 mt-6 2xl:mt-10">
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
            <div className="bg-white w-full lg:w-10/12 xl:w-8/12 rounded-2xl min-h-[60vh] px-2 py-4 md:px-4 shadow-md">
              <div className="text-xl text-urban-green mt-4 text-center 2xl:text-4xl 2xl:mt-10">
                BOOK A TRIP
              </div>
              <div className="w-full mt-4 pb-4">
                <BookTripForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 m-auto mt-72 xl:mt-14 min-h-96 xl:py-20">
        <div className="w-full flex justify-center">
          <Image
            src="/assets/section-logo.svg"
            width={140}
            height={40}
            alt=""
            className="w-52 xl:w-60"
          />
        </div>
        <div className="w-full mt-10 flex flex-col items-center gap-2">
          <h2 className="text-4xl xl:text-[3.7rem] text-center">
            <span className=" text-urban-green">With Urban</span>, you're always
            one click away
          </h2>
          <p className="xl:text-4xl font-thin italic text-center mt-2">
            from experiencing prompt, convenient and better travel with
            efficient ETAs
          </p>
        </div>
        <div className="bg-[#ebeaea81] min-h-40 xl:p-10 mt-20">
          <p className="text-center text-xl mt-10 xl:mt-4">
            Book your trip in 3 easy step
          </p>
          <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
            <div className="p-10 bg-white min-h-40 w-full lg:w-[30%]">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/stepone.svg"
                  width={50}
                  height={40}
                  alt=""
                />
                <span className=" text-urban-lightGreen">Step One</span>
              </div>
              <p className="mt-4 font-light">
                Download the Urban mobile app on either the Apple Store or the
                Google Play Store
              </p>
            </div>
            <div className="p-10 bg-white min-h-40 w-full lg:w-[30%]">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/steptwo.svg"
                  width={50}
                  height={40}
                  alt=""
                />
                <span className=" text-urban-lightGreen">Step Two</span>
              </div>
              <p className="mt-4 font-light">
                Sign up on the Urban mobile app you just downloaded using your
                phone number and email
              </p>
            </div>
            <div className="p-10 bg-white min-h-40 w-full lg:w-[30%]">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/stepthree.svg"
                  width={50}
                  height={40}
                  alt=""
                />
                <span className=" text-urban-lightGreen">Step Three</span>
              </div>
              <p className="mt-4 font-light">
                Conveniently book your trip via the Urban mobile app or web
                remotely and in real-time
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center w-full lg:w-4/12 m-auto gap-4">
            <button className="w-1/2 rounded-md py-3 px-4 border-none bg-urban-green text-white lg:text-sm xl:text-base">
              Contine
            </button>

            <button className="w-1/2 rounded-md py-3 px-2 border border-urban-green text-urban-black lg:text-sm xl:text-base">
              Check My Bookings
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
