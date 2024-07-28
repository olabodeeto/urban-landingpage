"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Footer from "../shared/components/footer/footer";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import "./hotels.scss";
import AppAd from "../shared/components/app-ad/app-ad";

export default function HotelsPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="relative">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[60vh] lg:min-h-[85vh] bg-hotelhero bg-cover py-10 px-4">
        <div className="flex flex-col justify-center items-center hotel-hero">
          <div className="mt-40 lg:mt-40 w-full lg:w-6/12 xl:w-7/12 m-auto text-center flex flex-col gap-4 lg:gap-10 items-center 2xl:w-8/12 2xl:mt-60">
            <h2
              className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl leading-8 xl:leading-[4rem]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Take Advantage of Discounted Room Offers at Our Partner Hotels
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
          <h2
            className="text-4xl lg:text-4xl font-creato font-light 2xl:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Recommended Hotels in your Destination
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-y-14 lg:gap-y-6 lg:grid-cols-3  justify-between gap-1 lg:gap-6 xl:gap-8 2xl:gap-6">
            {/* -------------- */}
            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden hotel-card">
              <div className="relative">
                <Image
                  src="/assets/hotel.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
                />
                <div className="w-full absolute bottom-4 flex justify-center">
                  <button className="bg-white py-2 px-4 rounded-full">
                    Book Hotel
                  </button>
                </div>
              </div>
              <div className="h-48 mt-4 bg-[#6cc56c22] rounded-br-[2rem] rounded-bl-[2rem] flex p-3 justify-between items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <PlaceOutlinedIcon
                        // sx={{ fontSize: "1.2rem" }}
                        className="text-xl 2xl:text-40"
                      />
                      <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                        Abuja
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-light  _hotel-card-bodyText">
                        Rate from
                      </h3>

                      <h3 className="font-light _hotel-card-price">
                        <span className="text-urban-green font-bold">
                          N20,000.00
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h2 className="mt-2 font-creato font-bold text-3xl mb-4 _hotel-name ">
                    Elixir Hotel
                  </h2>
                  <p className="_hotel-card-bodyText font-light">
                    Address: No 23, Kingsway rd Kaduna
                  </p>
                  <p className="font-light _hotel-card-bodyText mt-4">
                    For Reservations call{" "}
                    <span className=" text-urban-green font-bold">
                      +234 903 476 9809
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-4xl font-bold text-urban-green 2xl:text-[2.42rem]">
                      10%
                    </span>
                    <p className="font-light text-sm 2xl:text-base">
                      Discount /Room
                    </p>
                  </div>
                  <div className="mt-2 bg-white text-xs py-2 px-3 rounded-full flex items-center gap-2 shadow">
                    <span className="text-[0.66rem]">See Direction</span>
                    <MyLocationOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- */}

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden hotel-card">
              <div className="relative">
                <Image
                  src="/assets/hotel.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
                />
                <div className="w-full absolute bottom-4 flex justify-center">
                  <button className="bg-white py-2 px-4 rounded-full">
                    Book Hotel
                  </button>
                </div>
              </div>
              <div className="h-48 mt-4 bg-[#6cc56c22] rounded-br-[2rem] rounded-bl-[2rem] flex p-3 justify-between items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <PlaceOutlinedIcon
                        // sx={{ fontSize: "1.2rem" }}
                        className="text-xl 2xl:text-40"
                      />
                      <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                        Abuja
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-light  _hotel-card-bodyText">
                        Rate from
                      </h3>

                      <h3 className="font-light _hotel-card-price">
                        <span className="text-urban-green font-bold">
                          N20,000.00
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h2 className="mt-2 font-creato font-bold text-3xl mb-4 _hotel-name ">
                    Elixir Hotel
                  </h2>
                  <p className="_hotel-card-bodyText font-light">
                    Address: No 23, Kingsway rd Kaduna
                  </p>
                  <p className="font-light _hotel-card-bodyText mt-4">
                    For Reservations call{" "}
                    <span className=" text-urban-green font-bold">
                      +234 903 476 9809
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-4xl font-bold text-urban-green 2xl:text-[2.42rem]">
                      10%
                    </span>
                    <p className="font-light text-sm 2xl:text-base">
                      Discount /Room
                    </p>
                  </div>
                  <div className="mt-2 bg-white text-xs py-2 px-3 rounded-full flex items-center gap-2 shadow">
                    <span className="text-[0.66rem]">See Direction</span>
                    <MyLocationOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden hotel-card">
              <div className="relative">
                <Image
                  src="/assets/hotel.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
                />
                <div className="w-full absolute bottom-4 flex justify-center">
                  <button className="bg-white py-2 px-4 rounded-full">
                    Book Hotel
                  </button>
                </div>
              </div>
              <div className="h-48 mt-4 bg-[#6cc56c22] rounded-br-[2rem] rounded-bl-[2rem] flex p-3 justify-between items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <PlaceOutlinedIcon
                        // sx={{ fontSize: "1.2rem" }}
                        className="text-xl 2xl:text-40"
                      />
                      <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                        Abuja
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-light  _hotel-card-bodyText">
                        Rate from
                      </h3>

                      <h3 className="font-light _hotel-card-price">
                        <span className="text-urban-green font-bold">
                          N20,000.00
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h2 className="mt-2 font-creato font-bold text-3xl mb-4 _hotel-name ">
                    Elixir Hotel
                  </h2>
                  <p className="_hotel-card-bodyText font-light">
                    Address: No 23, Kingsway rd Kaduna
                  </p>
                  <p className="font-light _hotel-card-bodyText mt-4">
                    For Reservations call{" "}
                    <span className=" text-urban-green font-bold">
                      +234 903 476 9809
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-4xl font-bold text-urban-green 2xl:text-[2.42rem]">
                      10%
                    </span>
                    <p className="font-light text-sm 2xl:text-base">
                      Discount /Room
                    </p>
                  </div>
                  <div className="mt-2 bg-white text-xs py-2 px-3 rounded-full flex items-center gap-2 shadow">
                    <span className="text-[0.66rem]">See Direction</span>
                    <MyLocationOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden hotel-card">
              <div className="relative">
                <Image
                  src="/assets/hotel.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
                />
                <div className="w-full absolute bottom-4 flex justify-center">
                  <button className="bg-white py-2 px-4 rounded-full">
                    Book Hotel
                  </button>
                </div>
              </div>
              <div className="h-48 mt-4 bg-[#6cc56c22] rounded-br-[2rem] rounded-bl-[2rem] flex p-3 justify-between items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <PlaceOutlinedIcon
                        // sx={{ fontSize: "1.2rem" }}
                        className="text-xl 2xl:text-40"
                      />
                      <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                        Abuja
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-light  _hotel-card-bodyText">
                        Rate from
                      </h3>

                      <h3 className="font-light _hotel-card-price">
                        <span className="text-urban-green font-bold">
                          N20,000.00
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h2 className="mt-2 font-creato font-bold text-3xl mb-4 _hotel-name ">
                    Elixir Hotel
                  </h2>
                  <p className="_hotel-card-bodyText font-light">
                    Address: No 23, Kingsway rd Kaduna
                  </p>
                  <p className="font-light _hotel-card-bodyText mt-4">
                    For Reservations call{" "}
                    <span className=" text-urban-green font-bold">
                      +234 903 476 9809
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-4xl font-bold text-urban-green 2xl:text-[2.42rem]">
                      10%
                    </span>
                    <p className="font-light text-sm 2xl:text-base">
                      Discount /Room
                    </p>
                  </div>
                  <div className="mt-2 bg-white text-xs py-2 px-3 rounded-full flex items-center gap-2 shadow">
                    <span className="text-[0.66rem]">See Direction</span>
                    <MyLocationOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden hotel-card">
              <div className="relative">
                <Image
                  src="/assets/hotel.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
                />
                <div className="w-full absolute bottom-4 flex justify-center">
                  <button className="bg-white py-2 px-4 rounded-full">
                    Book Hotel
                  </button>
                </div>
              </div>
              <div className="h-48 mt-4 bg-[#6cc56c22] rounded-br-[2rem] rounded-bl-[2rem] flex p-3 justify-between items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <PlaceOutlinedIcon
                        // sx={{ fontSize: "1.2rem" }}
                        className="text-xl 2xl:text-40"
                      />
                      <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                        Abuja
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-light  _hotel-card-bodyText">
                        Rate from
                      </h3>

                      <h3 className="font-light _hotel-card-price">
                        <span className="text-urban-green font-bold">
                          N20,000.00
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h2 className="mt-2 font-creato font-bold text-3xl mb-4 _hotel-name ">
                    Elixir Hotel
                  </h2>
                  <p className="_hotel-card-bodyText font-light">
                    Address: No 23, Kingsway rd Kaduna
                  </p>
                  <p className="font-light _hotel-card-bodyText mt-4">
                    For Reservations call{" "}
                    <span className=" text-urban-green font-bold">
                      +234 903 476 9809
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-4xl font-bold text-urban-green 2xl:text-[2.42rem]">
                      10%
                    </span>
                    <p className="font-light text-sm 2xl:text-base">
                      Discount /Room
                    </p>
                  </div>
                  <div className="mt-2 bg-white text-xs py-2 px-3 rounded-full flex items-center gap-2 shadow">
                    <span className="text-[0.66rem]">See Direction</span>
                    <MyLocationOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden hotel-card">
              <div className="relative">
                <Image
                  src="/assets/hotel.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
                />
                <div className="w-full absolute bottom-4 flex justify-center">
                  <button className="bg-white py-2 px-4 rounded-full">
                    Book Hotel
                  </button>
                </div>
              </div>
              <div className="h-48 mt-4 bg-[#6cc56c22] rounded-br-[2rem] rounded-bl-[2rem] flex p-3 justify-between items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <PlaceOutlinedIcon
                        // sx={{ fontSize: "1.2rem" }}
                        className="text-xl 2xl:text-40"
                      />
                      <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                        Abuja
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-light  _hotel-card-bodyText">
                        Rate from
                      </h3>

                      <h3 className="font-light _hotel-card-price">
                        <span className="text-urban-green font-bold">
                          N20,000.00
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h2 className="mt-2 font-creato font-bold text-3xl mb-4 _hotel-name ">
                    Elixir Hotel
                  </h2>
                  <p className="_hotel-card-bodyText font-light">
                    Address: No 23, Kingsway rd Kaduna
                  </p>
                  <p className="font-light _hotel-card-bodyText mt-4">
                    For Reservations call{" "}
                    <span className=" text-urban-green font-bold">
                      +234 903 476 9809
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-4xl font-bold text-urban-green 2xl:text-[2.42rem]">
                      10%
                    </span>
                    <p className="font-light text-sm 2xl:text-base">
                      Discount /Room
                    </p>
                  </div>
                  <div className="mt-2 bg-white text-xs py-2 px-3 rounded-full flex items-center gap-2 shadow">
                    <span className="text-[0.66rem]">See Direction</span>
                    <MyLocationOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
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
