import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../shared/components/footer/footer";

export default function Fleetpage() {
  return (
    <main className="relative ">
      <section className="w-full -mt-[7.5rem] 2xl:-mt-40 min-h-[60vh] lg:min-h-[75vh] bg-heroFleet bg-cover py-10 px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-40 lg:mt-40 2xl:mt-72 w-11/12 lg:w-5/12 xl:w-5/12 m-auto text-center flex flex-col gap-10 items-center">
            <h2 className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl">
              Exquisitely Engineered Travel Experience.{" "}
              <span className="font-thin">
                Join Our Community of Fleet Partners
              </span>
            </h2>
            <button className="bg-white rounded-md py-3 px-4 w-5/12 lg:w-4/12">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- about --------------- */}
      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20">
        <section className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
            Exploitable{" "}
            <span className=" text-urban-green font-extrabold">
              Opportunities
            </span>
          </h2>
          <p className="mt-4 leading-8 lg:leading-10 text-base lg:text-xl font-creato font-light">
            Instantly recognizable, Urban has been delivered across four cities
            at present. Our team works hand-in-hand with travelers to tailor
            each travel to their specific travel requirements. This truly
            bespoke travel experience is a collaboration process with infinite
            scope for personalization. Urban has instant appeal to travelers
            looking for ultimate unparallel travel. It's uncompromising approach
            across fleet and trip design and management has drawn countless
            accolades lauded as maximizing travelers' engagement and experience.
          </p>
          <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
            <div className="w-full h-96 lg:1/2 relative overflow-hidden">
              <Image
                src="/assets/fleet1.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
            <div className="w-full h-96 lg:1/2 relative overflow-hidden">
              <Image
                src="/assets/fleet2.png"
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

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20">
        <section className="m-auto xl:mt-14 min-h-96">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
            Why become Urban
            <span className=" text-urban-green font-extrabold">
              Fleet partner
            </span>
          </h2>
          <div className="bg-[#6cc56c2a] min-h-40 lg:p-10 mt-14">
            <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2 mb-6">
              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/yfleet1.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                </div>
                <p className="mt-4 font-light text-center">
                  Strong support Network round the clock 365days
                </p>
              </div>

              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/yfleet2.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                </div>
                <p className="mt-4 font-light text-center">
                  Improved Revenue Visibility for Fleet Partners
                </p>
              </div>

              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/yfleet3.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                </div>
                <p className="mt-4 font-light text-center">
                  Quick, Convenient, Easy to use Fleet Management Dashboard
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2 mb-6">
              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/yfleet4.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                </div>
                <p className="mt-4 font-light text-center">
                  Cutting-Edge Technology built with you in mind
                </p>
              </div>

              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/yfleet5.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                </div>
                <p className="mt-4 font-light text-center">
                  Assured Revenue with real-time payments per booking
                </p>
              </div>

              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/yfleet6.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                </div>
                <p className="mt-4 font-light text-center">
                  Fixed agreed cost per Trip without excuses or delay
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

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

      {/* =========== app ads ======================== */}
      <div className="w-wull lg:w-full lg:px-6 m-auto bg-urban-black min-h-4">
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto bg-urban-black py-10">
          <section className="w-full bg-white flex flex-col lg:flex-row p-10 lg:p-20 rounded-xl">
            <div className="w-full lg:w-1/2">
              <Image
                src="/assets/appAdd.svg"
                width={120}
                height={120}
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center min-h-80">
              <div className="">
                <h2 className="text-4xl lg:text-5xl font-creato font-bold">
                  Urban App
                </h2>
                <p className="italic font-creato text-left text-2xl">
                  Available on Web and App
                </p>
                <div className="flex items-center gap-2 lg:gap-5 mt-6 2xl:mt-10">
                  <Image
                    src="/assets/appstoreIcon.svg"
                    width={140}
                    height={40}
                    alt=""
                    className="lg:w-28 xl:w-32 2xl:w-40"
                  />
                  <Image
                    src="/assets/playstoreIcon.svg"
                    width={140}
                    height={40}
                    alt=""
                    className="lg:w-28 xl:w-32 2xl:w-40"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 pl-1">
                  <Image
                    src="/assets/bliplogo.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <span className="font-light text-sm">
                    Powered by <span className="font-bold">BLIP LLC</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* ============================================= */}

      {/* ---------- footer ------------------- */}
      <Footer />
      {/* -------------------------------------- */}
    </main>
  );
}
