"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./passenger-details.scss";
import Footer from "@/app/shared/components/footer/footer";
import { useRouter } from "next/navigation";
import PassengerAccordion from "./passenger-accordion/passenger-accordion";
import Select from "@mui/joy/Select";
import { KeyboardArrowDown } from "@mui/icons-material";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import TripCard from "@/app/shared/components/trip-card/trip-card";
import SimilarTripCard from "./similar-trip-card";

export default function PassengerDetails() {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="-mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] py-10 px-4">
        <section className="m-h-96  w-full lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12 passenger-details-trips-page">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-x-2">
                <div onClick={() => router.back()} className="cursor-pointer">
                  <KeyboardBackspaceIcon />
                </div>
                <span className="text-xl lg:text-2xl">
                  Enter Passenger’s details
                </span>
              </div>
              <div className="mt-4">
                <PassengerAccordion
                  sn={1}
                  passengerName={"Tade Ogunbade"}
                  seatNumber="B1"
                >
                  <div
                    className="w-full flex flex-col gap-10"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    <div className=" w-full mt-6">
                      <label className="text-base font-light">Title</label>
                      <div className="mt-3">
                        <Select
                          defaultValue={18}
                          indicator={<KeyboardArrowDown />}
                          sx={{ height: "48px", fontSize: "0.8rem" }}
                          slotProps={{
                            listbox: {
                              sx: {
                                maxHeight: "200px",
                              },
                            },
                          }}
                        >
                          {["Mr", "Mrs", "Miss", "Sir"].map(
                            (seat, index: number) => (
                              <Option
                                value={seat}
                                sx={{ fontSize: "0.8rem" }}
                                key={index}
                              >
                                {seat}
                              </Option>
                            )
                          )}
                        </Select>
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="text-base font-light">First Name</label>
                      <div className="mt-3">
                        <Input
                          type="text"
                          placeholder="Type in here…"
                          sx={{
                            height: "46px",
                            fontSize: "0.8rem",
                            "--Input-focusedInset": "var(--any, )",
                            "--Input-focusedThickness": "0.25px",
                            "--Input-focusedHighlight": "#15560c",
                            "&:focus-outside": {
                              borderColor: "#000000",
                            },
                            ":focus": "#000",
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="text-base font-light">Last Name</label>
                      <div className="mt-3">
                        <Input
                          type="text"
                          placeholder="Type in here…"
                          sx={{
                            height: "46px",
                            fontSize: "0.8rem",
                            "--Input-focusedInset": "var(--any, )",
                            "--Input-focusedThickness": "0.25px",
                            "--Input-focusedHighlight": "#15560c",
                            "&:focus-outside": {
                              borderColor: "#000000",
                            },
                            ":focus": "#000",
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="text-base font-light">
                        Phone Number
                      </label>
                      <div className="mt-3">
                        <Input
                          type="text"
                          placeholder="Type in here…"
                          sx={{
                            height: "46px",
                            fontSize: "0.8rem",
                            "--Input-focusedInset": "var(--any, )",
                            "--Input-focusedThickness": "0.25px",
                            "--Input-focusedHighlight": "#15560c",
                            "&:focus-outside": {
                              borderColor: "#000000",
                            },
                            ":focus": "#000",
                          }}
                        />
                      </div>
                    </div>

                    <div className=" w-full mt-2">
                      <div className="w-full flex items-center justify-between">
                        <label className="text-base font-light">
                          Select Seat
                        </label>
                        <button className="bg-[#6cc56c29] text-urban-green py-2 px-4 text-xs rounded-lg">
                          See seat Arrangement
                        </button>
                      </div>
                      <div className="mt-3">
                        <Select
                          defaultValue={18}
                          indicator={<KeyboardArrowDown />}
                          sx={{ height: "48px", fontSize: "0.8rem" }}
                          slotProps={{
                            listbox: {
                              sx: {
                                maxHeight: "200px",
                              },
                            },
                          }}
                        >
                          {["A1", "A2", "B1", "B2", "B3", "C1"].map(
                            (seat, index: number) => (
                              <Option
                                value={seat}
                                sx={{ fontSize: "0.8rem" }}
                                key={index}
                              >
                                {seat}
                              </Option>
                            )
                          )}
                        </Select>
                      </div>
                    </div>
                  </div>
                </PassengerAccordion>
              </div>
            </div>
            {/* ----- right side------ */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="border border-gray-300 w-full lg:w-11/12 p-4 px-2 lg:px-7 2xl:px-8">
                <h2 className="text-xl lg:text-2xl">Map</h2>
                <div className="mt-4">
                  <div className="h-80 bg-slate-100"></div>

                  <h2 className="w-full text-xl lg:text-2xl mt-10 mb-4 font-light">
                    Parks around you with similar trips
                  </h2>
                  <div className="similar-trip-card-container w-full grid grid-cols-1 gap-y-14 lg:gap-y-10 lg:grid-cols-2 lg:gap-x-2">
                    {/* cards */}
                    <SimilarTripCard />
                    <SimilarTripCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
