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
        <section className="w-full angecyHero -mt-[7.8rem] 2xl:-mt-40 min-h-[82vh]  bg-agencyHero bg-cover py-10 px-4 flex flex-col items-center">
          <div className="agency-hero-container relative">
            <div className="_leftSide">
              <h2
                className="agency-heroText font-creato font-light"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Get discounts and special deals when you use your Urban
                Traveler's Card
              </h2>
              <div
                className="flex items-center gap-2 mt-6"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Image
                  src="/assets/rounded-logo.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="lg:w-10"
                />
                <span className="italic block font-thin font-creato text-white text-xl xl:text-3xl">
                  Travel & Live like a Native
                </span>
              </div>
            </div>

            <div className="_cardrigthSide">
              <Image
                src="/assets/cardheroo.png"
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

        <div className=" flex justify-center items-center lg:pt-20 mt-24 lg:mt-20">
          <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto lg:mt-4">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-6/12">
                <Image
                  src="/assets/card-section-bg.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="w-full object-cover object-center"
                />
              </div>

              <div className="w-full lg:w-6/12 bg-white p-10 lg:px-20 flex flex-col justify-center">
                <div className="mt-2 w-full  xl:-mt-8 cardsection-container floating-text">
                  <h2
                    className=" text-2xl lg:text-xl xl:text-4xl lg:w-full w-11/12 italic font-creato mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <span className=" text-urban-green">
                      {" "}
                      Urban Trip Financing{" "}
                    </span>{" "}
                    low on cash! Get the Urban Card.
                  </h2>
                </div>

                <div className="w-full flex justify-start">
                  <button
                    className="bg-urban-green text-white py-2 px-6 rounded 2xl:py-3 2xl:px-10 2xl:text-xl"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-once="true"
                    onClick={() => setopenModal(true)}
                  >
                    Get Card
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

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
