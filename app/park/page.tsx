import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../shared/components/footer/footer";

export default function Parkpage() {
  return (
    <main className="relative">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[60vh] lg:min-h-[85vh] bg-heroPark bg-cover py-10 px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-40 lg:mt-40 2xl:mt-72 w-11/12 lg:w-6/12 xl:w-6/12 m-auto text-center flex flex-col gap-10 items-center">
            <h2 className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl italic">
              <span className="font-thin">
                Together, let's make the mobility of tomorrow happen{" "}
              </span>
              Join Our Network of Park Partners.{" "}
            </h2>
            <button className="bg-white rounded-md py-3 px-4 w-5/12 lg:w-4/12">
              Own A Park
            </button>
          </div>
        </div>
      </section>

      <div className="2xl:w-11/12 m-auto">
        {/* ---------------- about --------------- */}
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-2 mt-20">
          <section className="">
            <h2 className="italic text-4xl lg:text-4xl font-creato font-thin">
              Why Become Urban{" "}
              <span className=" text-urban-green font-extrabold">
                Park Partner?
              </span>
            </h2>
            <p className="mt-4 leading-8 lg:leading-10 text-base lg:text-xl font-creato font-light">
              Urban holds innovation and technology at the heart of its core
              values; adopting a game changing mindset by redefining the meaning
              of 'new' and breaking ground that's it's not only never done
              before, but never even considered. By forever breaking the mold
              and embracing new technology, Urban has become a true
              revolutionary-celebrating a number of Nigeria-first in history,
              with hugely exciting future. Behind everything is Urban's
              insatiable drive for perfection, leaving no stone unturned in the
              pursuit of ultimate performance and daring to be different in the
              process.
            </p>
            <div>
              <div className=" min-h-40 mt-1">
                <div className="mt-10 flex flex-col lg:flex-row justify-between gap-y-4 gap-10 mb-4">
                  <div className="p-14 lg:p-20 bg-[#6CC56C] min-h-40 w-full lg:w-1/2  boxShadow rounded-xl">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/park1.svg"
                        width={50}
                        height={40}
                        alt=""
                      />
                    </div>
                    <p className="mt-4 font-light text-xl xl:4xl lg:w-8/12">
                      Improved park management across multiple parks
                    </p>
                  </div>
                  <div className="p-14 lg:p-20 bg-[#6cc56c30] min-h-40 w-full lg:w-1/2 boxShadow rounded-xl relative overflow-hidden">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/park2.svg"
                        width={50}
                        height={40}
                        alt=""
                      />
                    </div>
                    <p className="mt-4 font-light text-xl xl:4xl lg:w-8/12">
                      Centralized park management dashboard
                    </p>
                    <Image
                      src="/assets/fleetphone.png"
                      width={50}
                      height={40}
                      alt=""
                      className=" absolute w-60 -right-28 -top-10"
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-col lg:flex-row justify-between gap-y-4 gap-10 mb-4">
                  <div className="p-14 lg:p-20 bg-[#6cc56c39] min-h-40 w-full lg:w-1/2  boxShadow rounded-xl">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/park3.svg"
                        width={50}
                        height={40}
                        alt=""
                      />
                    </div>
                    <p className="mt-4 font-light text-xl xl:4xl lg:w-8/12">
                      Centralized fleet and provider management dashboard
                    </p>
                  </div>
                  <div className="p-14 lg:p-20 bg-[#6cc56c] min-h-40 w-full lg:w-1/2 boxShadow rounded-xl relative overflow-hidden">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/park4.svg"
                        width={50}
                        height={40}
                        alt=""
                      />
                      <span className=" text-urban-lightGreen">Step Two</span>
                    </div>
                    <p className="mt-4 font-light text-xl xl:4xl lg:w-8/12">
                      Centralized park management dashboard
                    </p>
                    <Image
                      src="/assets/parkframe.svg"
                      width={100}
                      height={400}
                      alt=""
                      className=" absolute w-80 lg:w-96 xl:w-80 -right-28  xl:-right-8 top-0 xl:-top-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ------------------------------------------ */}
      </div>

      {/* ----------vision ------------------- */}
      <div className="bg-[#6cc56c17] flex justify-center items-center py-20 mt-20">
        <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto lg:mt-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-7/12 bg-uParkImghand bg-cover p-10 flex justify-center"></div>

            <div className="w-full lg:w-5/12 bg-urban-black p-10 lg:p-20 flex flex-col items-center justify-center gap-4 lg:gap-10 lg:min-h-96">
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
                  Manage{" "}
                  <span className="font-thin">
                    your park, fleet and providers in a glance
                  </span>
                </h2>
              </div>

              <div className="w-full flex justify-start">
                <button className="bg-white text-urban-green py-2 px-6 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* -------------------------------- */}

      {/* ----------assign manager ------------------- */}
      <div className="bg-[#ffffff] flex justify-center items-center pb-20 mt-20">
        <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto lg:mt-4">
          <h2 className="text-4xl lg:text-4xl font-creato">
            Quickly Assign{" "}
            <span className=" text-urban-green font-extrabold">
              Park Managers & Dispatch Officers?
            </span>
          </h2>
          <div className="flex flex-col lg:flex-row justify-between mt-10">
            <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-6/12 bg-cover p-10 flex justify-center">
              <Image
                src="/assets/parkmanagers.png"
                width={500}
                height={40}
                alt=""
                className=""
              />
            </div>

            <div className="w-full lg:w-6/12 bg-white p-8 lg:p-20 flex flex-col items-center justify-center gap-8 lg:gap-10 lg:min-h-96">
              <div>
                <h4 className="font-creato mb-2 font-bold">Park Managers</h4>
                <p className="font-creato leading-8 font-light">
                  Efficiently assign and manage Park Managers remotely and in
                  real-time. Park Owners are equipped with our seamless suite of
                  integrated park management tools. A suite for both single and
                  multi-park use.
                </p>
              </div>

              <div>
                <h4 className="font-creato mb-2 font-bold">
                  {" "}
                  Dispatch Officers
                </h4>
                <p className="font-creato leading-8 font-light">
                  Manage Dispatch Officers remotely and in real-time via our
                  integrated Park Management Dashboard. Urban Park Management
                  Dashboard comes bundled with amazing booking management tools
                  for individual or business users.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* -------------------------------- */}

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
