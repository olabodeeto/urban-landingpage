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
        <section className="w-full angecyHero -mt-[7.8rem] 2xl:-mt-40 md:min-h-[82vh] bg-newcardHeroBg bg-cover py-10 px-4 flex flex-col items-center">
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

              <div className="flex items-center mt-4 gap-x-4  xl:mt-10">
                <div className="py-4 lg:py-3 2xl:py-5 px-8 2xl:px-12 bg-white rounded-lg font-creato font-semibold border-2 border-white cardhereBtn cursor-pointer">
                  Get Started
                </div>
                <div
                  className="border-2 border-white py-4 lg:py-3 2xl:py-5 px-5 2xl:px-12 text-white rounded-lg font-creato font-semibold cardhereBtn cursor-pointer"
                  onClick={() => setopenModal(true)}
                >
                  Request A Demo
                </div>
              </div>
            </div>

            <div className="_cardrigthSide">
              <Image
                src="/assets/simplecard.png"
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

        <div className=" flex justify-center items-center lg:pt-20 mt-24 lg:mt-2">
          <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto lg:mt-4">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full min-h-[20rem] lg:min-h-[30rem] lg:w-6/12">
                <Image
                  src="/assets/card-section-bg.svg"
                  width={30}
                  height={30}
                  alt=""
                  className="w-full object-cover object-center"
                />
              </div>

              <div className="w-full lg:w-6/12 bg-white mt-8 lg:mt-0 lg:p-10 lg:px-20 flex flex-col">
                <div className="mt-2 w-full  xl:-mt-8 cardsection-container">
                  <h2 className=" text-2xl lg:text-xl xl:text-4xl lg:w-full w-11/12 font-creato mb-2 text-urban-green">
                    From individuals, small businesses to global enterprises
                  </h2>
                  <p className="font-creato text-xl mt-4">
                    {" "}
                    Everyone spend and saves with Urban Card.{" "}
                  </p>
                  <div className="mt-4 mb-4 px-4">
                    <ul className="flex-col gap-4 text-xl list-item list-disc font-creato list-outside">
                      <li className="mb-4"> Road Warriors</li>
                      <li className="mb-4"> Travel Managers</li>
                      <li className="mb-4"> Finance and Accounting</li>
                      <li className="mb-4"> Executive Assistants</li>
                    </ul>
                  </div>
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
