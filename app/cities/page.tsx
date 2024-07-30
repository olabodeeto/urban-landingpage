"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Footer from "../shared/components/footer/footer";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import "./city.scss";
import AppAd from "../shared/components/app-ad/app-ad";

export default function CityPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="relative">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] bg-cityhero bg-cover py-10 px-4">
        <div className="flex flex-col justify-center items-center city-hero">
          <div className="mt-40 lg:mt-40 w-full lg:w-6/12 xl:w-7/12 m-auto text-center flex flex-col gap-4 lg:gap-10 items-center 2xl:w-8/12 2xl:mt-60">
            <h2
              className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl leading-8 xl:leading-[4rem] mt-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Urban Core Locations
            </h2>
            <div className="w-10/12 lg:w-8/12 m-auto 2xl:w-7/12">
              <form
                className="w-full rounded-xl bg-white flex items-center gap-1 px-4 2xl:py-2"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <SearchIcon
                  sx={{ color: "#a7a7ab" }}
                  className="2xl:text-3xl"
                />
                <input
                  placeholder="Abuja"
                  type="search"
                  className="w-full py-2 outline-none px-1 text-gray-500 2xl:text-xl font-light tracking-[0.1rem]"
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20 2xl:w-10/12">
        <section className="">
          <div className="mt-10 grid grid-cols-1 gap-y-14 lg:gap-y-6 lg:grid-cols-3  justify-between gap-1 lg:gap-6 xl:gap-8 2xl:gap-6">
            {/* -------------- */}
            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/abuja.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    ABUJA
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light text-2xl mb-2 text-urban-green">
                  Center of Unity
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email Sign up on the Urban mobile app you
                  just downloaded using your phone number and email
                </p>
              </div>
            </div>

            {/* ----------------- */}

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/jos.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    Jos
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light text-2xl mb-2 text-urban-green">
                  Home of Peace and Tourism
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email Sign up on the Urban mobile app you
                  just downloaded using your phone number and email
                </p>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/markudi.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    Markudi
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light text-2xl mb-2 text-urban-green">
                  Nigeria's Food Basket
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email Sign up on the Urban mobile app you
                  just downloaded using your phone number and email
                </p>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/markudi.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    MINNA
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light text-2xl mb-2 text-urban-green">
                  The Power State
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email Sign up on the Urban mobile app you
                  just downloaded using your phone number and email
                </p>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/lagos.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    Lagos
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <div className="flex items-center justify-between">
                  <h3 className="city-card-sub font-light text-2xl mb-2 text-urban-green">
                    Centre of Excellence
                  </h3>
                  <h3 className="city-card-sub font-thin text-2xl mb-2 text-urban-green italic 2xl:text-xl">
                    Coming Soon
                  </h3>
                </div>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email Sign up on the Urban mobile app you
                  just downloaded using your phone number and email
                </p>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/markudi.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    Kano
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <div className="flex items-center justify-between">
                  <h3 className="city-card-sub font-light text-2xl text-urban-green">
                    Centre of Commerce
                  </h3>
                  <h3 className="city-card-sub font-thin text-2xl mb-2 text-urban-green italic 2xl:text-xl">
                    Coming Soon
                  </h3>
                </div>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email Sign up on the Urban mobile app you
                  just downloaded using your phone number and email
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========== app ads ======================== */}
      <AppAd />
      {/* ============================================= */}
      {/* ---------- footer ------------------- */}
      <Footer />
      {/* -------------------------------------- */}
    </main>
  );
}
