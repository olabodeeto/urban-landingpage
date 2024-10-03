"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "../shared/components/footer/footer";
import "swiper/css";
import "swiper/css/pagination";
import "./urban-card.scss";
import AppAd from "../shared/components/app-ad/app-ad";
import TravelersDialog from "../shared/components/travelers-dialog/travelers-dialog";

export default function UrbanCardPage() {
  const [ismovileNavOpen, setismovileNavOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + ' bg-urban-green">' + "</span>";
    },
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main className="relative ">
        <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[82vh]  bg-newcardHeroBg bg-cover py-10 px-4 flex flex-col items-center">
          <div className="urbancardpage-hero-container relative">
            <div className="_cardPage_hero_leftSide flex flex-col gap-y-5">
              <Image
                src="/assets/cardpage-desc.svg"
                width={20}
                height={20}
                alt=""
                className="cardpage-desc-img"
              />
              <h2 className="font-creato cardpage-heroText italic">
                Urban Personal Card
              </h2>
              <h4
                className="cardpage-heroText-content font-creato font-light"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Everyone's travel and smart-expense destination. From unrivaled
                discounts across our massive merchants and travel inventory
                featuring top suppliers, to rewards for personal trips and to
                joining our super-amazing traveler's club
              </h4>
              <div className="flex items-center gap-x-4 mt-2 2xl:mt-4">
                <div className="py-4 lg:py-3 2xl:py-5 px-8 2xl:px-12 bg-white rounded-lg font-creato font-semibold border-2 border-white cardhereBtn">
                  Get Started
                </div>
                <div className="border-2 border-white py-4 lg:py-3 2xl:py-5 px-5 2xl:px-12 text-white rounded-lg font-creato font-semibold cardhereBtn">
                  Request A Demo
                </div>
              </div>
            </div>

            <div className="_cardPage_hero_rigthSide">
              <Image
                src="/assets/cardhero2.png"
                width={840}
                height={400}
                alt=""
                className="floating"
                data-aos="flip-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </section>

        <section className="m-auto mt-10 lg:mt-10 xl:mt-10 min-h-96 xl:py-20">
          <div className="w-full mt-2 flex flex-col items-center">
            <h2
              className="text-4xl xl:text-[3.7rem] text-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Benefits of Urban
              <span className=" text-urban-green"> Personal card</span>
            </h2>
          </div>
          <div className="bg-[#ebeaea42] min-h-40 lg:p-10 mt-10">
            <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/benefit1.png"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    Seamless travel experience
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Drive down travel costs without sacrificing your travel
                  experience. Visit our extensive merchant inventory across the
                  country.
                </p>
              </div>

              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/benefit2.png"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    24/7 Support
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Access a massive network of our travel experience centers or
                  self-serve with our Urban Mobile app, Webapp or AI Agent.
                </p>
              </div>
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/benefit3.png"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    Spend is a breeze
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Access our extensive ecosystem of merchants across the country
                  and enjoy unrivaled discounts across your spend.
                </p>
              </div>
            </div>

            <div className="mt-14 mb-5 flex items-center justify-center w-full lg:w-5/12 m-auto gap-4 2xl:mt-10">
              <button className="w-60 xl:w-44 2xL:w-60 rounded-md py-4 px-4 border-none bg-urban-green text-white lg:text-sm xl:text-base 2xl:text-xl">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* ------------------------------------- */}

        <section className="m-auto mt-10 lg:mt-10 xl:mt-10 min-h-96 xl:py-10">
          <div className="w-full mt-2 flex flex-col items-center">
            <h2
              className="text-4xl xl:text-[3.7rem] text-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              How to apply for Urban
              <span className=" text-urban-green"> Personal card</span>
            </h2>
          </div>
        </section>
        {/* -------------------------------------- */}

        {/* ====== swiper ======================= */}
        <section className="w-full py-10 lg:py-0 lg:w-8/12 m-auto xl:mt-20 lg:xl:my-0 lg:pb-20 relative card-slider-section">
          <div className="absolute w-full top-12">
            <h2 className="text-center font-creato lg:text-4xl font-bold">
              Pick the Card that suits you
            </h2>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full mycardSwiper"
          >
            <SwiperSlide>
              <div className="w-full min-h-96 flex justify-center items-center relative">
                <div className="w-6/12 flex flex-col justify-center items-center m-auto min-h-40 mt-40">
                  <Image
                    src="/assets/urbancard.png"
                    width={80}
                    height={40}
                    alt=""
                    className="w-6/12"
                  />

                  <div className="mt-10 flex flex-col items-center gap-4">
                    <p className="text-xl font-creato font-light 2xl:text-4xl sliderh3">
                      Personal Credit Card
                    </p>
                    <button className="p-3 px-8 bg-urban-green 2xl:py-4 2xl:text-xl text-white outline-none border border-urban-green rounded">
                      Get Card
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full min-h-96 flex justify-center items-center relative">
                <div className="w-6/12 flex flex-col justify-center items-center m-auto min-h-40 mt-40">
                  <Image
                    src="/assets/urbancard.png"
                    width={80}
                    height={40}
                    alt=""
                    className="w-6/12"
                  />

                  <div className="mt-10 flex flex-col items-center gap-4">
                    <p className="text-xl font-creato font-light 2xl:text-4xl sliderh3">
                      Personal Credit Card
                    </p>
                    <button className="p-3 px-8 bg-urban-green 2xl:py-4 2xl:text-xl text-white outline-none border border-urban-green rounded">
                      Get Card
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* ======================================= */}

        {/* ========================= */}
        <section className="w-full py-10 lg:py-0 lg:w-8/12 2xl:w-10/12 m-auto xl:mt-20 lg:xl:my-0 lg:pb-20 relative card-slider-section">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full p-20 lg:p-0 lg:w-1/2">
              <Image
                src="/assets/card-store.svg"
                width={120}
                height={40}
                alt=""
                className="w-full lg:w-8/12"
              />
            </div>
            <div className="w-full -mt-10 md:-mt-0 p-10 lg:p-0  lg:w-1/2 flex items-center justify-center">
              <h2 className="text-2xl leading-8 md:text-4xl xl:text-4xl 2xl:text-5xl font-creato md:leading-10 font-thin italic">
                <span className="font-bold not-italic text-urban-green">
                  Live Your Best Life!
                </span>{" "}
                Use your Urban Card Anywhere Anytime ATM, POS or Web.
              </h2>
            </div>
          </div>
        </section>
        {/* =========================== */}

        {/* =========== app ads ======================== */}
        <AppAd />
        {/* ============================================= */}

        {/* ---------- footer ------------------- */}
        <Footer />
        {/* -------------------------------------- */}
      </main>
      {openModal && (
        <TravelersDialog isOpen={openModal} setisopen={setopenModal} />
      )}
    </>
  );
}
