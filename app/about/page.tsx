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
      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-10">
        <section className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
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
          <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
            <div className="w-full h-80 lg:3/12 relative overflow-hidden">
              <Image
                src="/assets/brand1.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
            <div className="w-full h-80 lg:3/12 relative overflow-hidden">
              <Image
                src="/assets/brand2.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
            <div className="w-full h-80 lg:3/12 relative overflow-hidden">
              <Image
                src="/assets/brand3.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
          </div>
        </section>
      </div>
      {/* ------------------------------------------ */}

      {/* ----------vision ------------------- */}
      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-5/12 bg-urban-black p-10 lg:p-20 flex flex-col items-center gap-4 lg:gap-10 lg:min-h-96">
            <div className="flex items-center gap-4 text-white w-full">
              <Image
                src="/assets/pointIcon.svg"
                width={50}
                height={50}
                alt=""
              />
              <h2 className="text-4xl font-creato">Our Vision </h2>
            </div>

            <div className="mt-4 lg:mt-24">
              <h2 className=" text-2xl lg:text-3xl xl:text-4xl w-10/12 text-white font-creato italic">
                To be Africa’s{" "}
                <span className=" text-green-400">
                  most traveler- centric brand
                </span>
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-7/12 bg-[#6CC56C] p-10 flex justify-center">
            <Image
              src="/assets/africamap.svg"
              width={500}
              height={580}
              alt=""
            />
          </div>
        </div>
      </section>
      {/* -------------------------------- */}

      {/* ---------------- experience --------------- */}
      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-10">
        <div className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
            The Urban{" "}
            <span className=" text-urban-green font-extrabold">Experience</span>
          </h2>
          <p className="mt-4 leading-8 lg:leading-10 text-base lg:text-xl font-creato font-light">
            Urban continues to break novel grounds in the travel vertical and
            win new fans every day, but our ethos remains the same: challenge
            convention and provide the ultimate travel experience. To achieve
            our ethos, we have formed sustainable partnerships with the finest
            automotive, technology and lifestyle brands with the primary goal of
            enhancing user experience.
          </p>
          <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
            <div className="w-full h-80 lg:w-1/2 relative overflow-hidden">
              <Image
                src="/assets/exp1.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
            <div className="w-full h-80 lg:w-1/2 relative overflow-hidden">
              <Image
                src="/assets/exp2.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------ */}

      {/* ---------------- values --------------- */}
      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-10">
        <div className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
            Urban{" "}
            <span className=" text-urban-green font-extrabold">
              Core Values
            </span>
          </h2>
          <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row  justify-between gap-4 mb-4 gap-y-20">
            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex">
              <div className="w-28">
                <Image
                  src="/assets/1.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4">
                <h3 className="text-2xl font-creato">Push Boundaries</h3>
                <hr className=" border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12">
                  Dare to design the future of travel
                </span>
              </div>
            </div>

            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex">
              <div className="w-28 overflow-hidden">
                <Image
                  src="/assets/2.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4">
                <h3 className="text-2xl font-creato">Build with Empathy</h3>
                <hr className="border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12">
                  Create long-lasting, sustainable impact
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4 mb-4 pr-4">
            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex">
              <div className="w-28 overflow-hidden">
                <Image
                  src="/assets/3.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4">
                <h3 className="text-2xl font-creato">Travel Together</h3>
                <hr className=" border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12">
                  Collaborate with the ambition of changing the world
                </span>
              </div>
            </div>

            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex">
              <div className="w-28 overflow-hidden">
                <Image
                  src="/assets/4.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4">
                <h3 className="text-2xl font-creato">Seamless Experience</h3>
                <hr className="border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12">
                  Enable linkages across boundaries
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------ */}
    </main>
  );
}
