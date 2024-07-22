import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../shared/components/footer/footer";

export default function Fleetpage() {
  return (
    <main className="relative">
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

      <div className="2xl:w-11/12 m-auto">
        {/* ---------------- about --------------- */}
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-2 mt-20">
          <section className="">
            <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
              Exploitable{" "}
              <span className=" text-urban-green font-extrabold">
                Opportunities
              </span>
            </h2>
            <p className="mt-4 leading-8 lg:leading-10 text-base lg:text-xl font-creato font-light">
              Instantly recognizable, Urban has been delivered across four
              cities at present. Our team works hand-in-hand with travelers to
              tailor each travel to their specific travel requirements. This
              truly bespoke travel experience is a collaboration process with
              infinite scope for personalization. Urban has instant appeal to
              travelers looking for ultimate unparallel travel. It's
              uncompromising approach across fleet and trip design and
              management has drawn countless accolades lauded as maximizing
              travelers' engagement and experience.
            </p>
            <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
              <div className="w-full h-96 lg:h-[28rem] lg:1/2 relative overflow-hidden">
                <Image
                  src="/assets/fleet1.png"
                  width={300}
                  height={140}
                  alt=""
                  className="w-full h-96 2xl:h-[28rem] object-cover object-center"
                />
              </div>

              <div className="w-full h-96 lg:h-[28rem] lg:1/2 relative overflow-hidden">
                <Image
                  src="/assets/fleet2.png"
                  width={300}
                  height={140}
                  alt=""
                  className="w-full h-96 2xl:h-[28rem]  object-cover object-center"
                />
              </div>
            </div>
          </section>
        </div>
        {/* ------------------------------------------ */}

        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 -mt-14 lg:mt-24">
          <section className="m-auto xl:mt-14 min-h-96">
            <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
              Why become Urban
              <span className=" text-urban-green font-extrabold">
                {" "}
                Fleet partner
              </span>
            </h2>
            <div className="bg-[#6cc56c2a] min-h-40 lg:p-10 mt-14">
              <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2 mb-0">
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

              <div className="mt-4 flex flex-wrap justify-between gap-y-4 gap-2 mb-6">
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
            <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-7/12 bg-uFleethand bg-cover p-10 flex justify-center"></div>

            <div className="w-full lg:w-5/12 bg-urban-green p-10 lg:p-20 flex flex-col items-center justify-center gap-4 lg:gap-10 lg:min-h-96">
              <div className="flex items-center gap-4 text-white w-full">
                <Image
                  src="/assets/ufleetlogo.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <div className="mt-4 lg:mt-2">
                <h2 className=" text-2xl lg:text-3xl xl:text-4xl w-10/12 text-white font-creato italic">
                  Experience Great partnership{" "}
                  <span className="font-thin">
                    by Joining our growing community of
                  </span>
                  <span className=" text-green-500"> fleet partners</span>
                </h2>
              </div>

              <div className="w-full flex justify-start">
                <button className="bg-white text-urban-black py-2 px-6 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------------- */}
      </div>

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 -mt-14 lg:mt-24">
        <section className="m-auto xl:mt-14 min-h-96">
          <h2 className="text-4xl lg:text-4xl font-creato">
            How to become Urban
            <span className=" text-urban-green font-extrabold">
              {" "}
              Fleet partner
            </span>
          </h2>
          <p className="text-xl lg:text-2xl font-thin italic font-creato">
            follow the steps below
          </p>
          <div className=" min-h-40 lg:p-10 mt-1">
            <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] boxShadow">
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
              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] boxShadow">
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
              <div className="p-10 bg-white min-h-40 w-full lg:w-[30%] boxShadow">
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
            <div className="mt-4">
              <button className="py-2 px-6 bg-urban-green text-white font-creato rounded">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* =========== app ads ======================== */}
      <div className="w-wull lg:w-full lg:px-6 m-auto bg-urban-black min-h-4">
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto bg-urban-black py-10">
          <section className="w-full 2xl:w-11/12 m-auto bg-white flex flex-col lg:flex-row p-10 lg:p-20 rounded-xl">
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
