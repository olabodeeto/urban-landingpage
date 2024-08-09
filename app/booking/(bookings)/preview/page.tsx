"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./preview-details.scss";
import Footer from "@/app/shared/components/footer/footer";
import { useRouter } from "next/navigation";
import PreviewAccordion from "./preview-accordion/preview-accordion";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import SimilarTripCard from "./similar-trip-card";
import MapWithPath from "@/app/shared/components/map-with-path/map-with-path";
import SeatArrangementDialog from "@/app/shared/components/seat-arrange-dialog/seat-arrangement-dialog";

export default function PassengerDetails() {
  const noPassengers = [1, 2];
  const [showSeatModal, setshowSeatModal] = useState(false);
  const [passengers, setpassengers] = useState<any[]>(
    noPassengers.map((obj) => {
      return {
        title: "",
        email: "",
        firstName: "",
        surname: "",
        phoneNumber: "",
        seat: "",
        extraLuggage: 0,
      };
    })
  );
  const [currentPassager, setcurrentPassager] = useState<any>(null);
  const router = useRouter();

  const handleChange = (index: number, fieldName: string, value: any) => {
    const tempArr = [...passengers];
    const temcurrentObj = { ...passengers[index], [fieldName]: value };
    tempArr[index] = temcurrentObj;
    setpassengers(tempArr);
  };

  const LazyMap = dynamic(
    () => import("@/app/shared/components/map-with-path/map-with-path"),
    {
      ssr: false,
    }
  );

  const handleSubmit = () => {
    router.push("./payment");
  };
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // console.log("===>", passengers);
  }, [passengers]);

  return (
    <>
      <main className="-mt-[9.8rem]  2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] py-10 px-4">
        <section className="m-h-96  w-full lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12 passenger-details-trips-page">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-x-2">
                <div onClick={() => router.back()} className="cursor-pointer">
                  <KeyboardBackspaceIcon />
                </div>
                <span className="text-xl lg:text-2xl">Preview</span>
              </div>
              <div className="mt-4">
                <div className="mb-4">
                  <PreviewAccordion
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
                      <div className="w-full mt-6 min-h-40">
                        <h2 className="px-2">{1}. Passenger Details</h2>
                        <div className="mt-4 font-light">
                          <div className="w-full px-2 py-1 flex items-center justify-between">
                            <span className="block w-1/2 text-gray-400">
                              Passenger’s Name
                            </span>
                            <span className="block w-1/2">Hassan Tunmise</span>
                          </div>

                          <div className="w-full px-2 py-1 flex items-center justify-between">
                            <span className="block w-1/2 text-gray-400">
                              Phone Number
                            </span>
                            <span className="block w-1/2">09038726543</span>
                          </div>

                          <div className="w-full px-2 py-1 flex items-center justify-between">
                            <span className="block w-1/2 text-gray-400">
                              Seat Number
                            </span>
                            <span className="block w-1/2">A1</span>
                          </div>

                          <div className="w-full px-2 py-1 flex items-center justify-between">
                            <span className="block w-1/2 text-gray-400">
                              Extra Luggage size
                            </span>
                            <span className="block w-1/2">--</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h2 className="text-urban-green text-xl">
                            Trip Details
                          </h2>
                          <div className="p-2 bg-[#036E030F] mt-6 font-light flex flex-col gap-y-2">
                            <p>Vehicle Type: Bus</p>
                            <p>
                              Trip Code:{" "}
                              <span className="font-bold text-urban-green">
                                ABJSAG
                              </span>
                            </p>
                            <p>
                              Departure Time:{" "}
                              <span className="font-bold text-urban-green">
                                08:00 AM
                              </span>
                            </p>
                            <p>
                              Departure Date:{" "}
                              <span className="font-bold text-urban-green">
                                09/06/2024
                              </span>
                            </p>
                            <p>
                              Departure City:{" "}
                              <span className="font-bold text-urban-green">
                                Lagos
                              </span>
                            </p>
                            <p>
                              Destination City:{" "}
                              <span className="font-bold text-urban-green">
                                Abuja
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h2 className="text-urban-green text-xl">
                            Payment Details
                          </h2>
                          <div className="mt-4 font-light">
                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                Number of Passenger
                              </span>
                              <span className="block w-1/2">1</span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                Price per seats
                              </span>
                              <span className="block w-1/2">N12,500.00</span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                Cost Of Extra Luggage
                              </span>
                              <span className="block w-1/2">-</span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                VAT
                              </span>
                              <span className="block w-1/2">N1,500.00</span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-urban-green text-xl font-bold">
                                Total Amount
                              </span>
                              <span className="block w-1/2 font-semibold">
                                N16,500.00
                              </span>
                            </div>
                            <div className="mt-4 flex items-center gap-x-1">
                              <InfoOutlinedIcon
                                sx={{ fontSize: 18 }}
                                className="text-urban-green"
                              />
                              <p className="text-sm text-gray-800">
                                <span className="text-urban-green font-semibold">
                                  Please Note:
                                </span>{" "}
                                Luggage size and weight may attract extra cost
                                at check-in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PreviewAccordion>
                </div>

                <div className="mt-10 mb-10 w-full flex flex-col gap-y-2">
                  <div
                    className="py-3 border border-urban-green rounded-md bg-white text-urban-green flex justify-center items-center px-10 w-full"
                    onClick={handleSubmit}
                  >
                    Edit Info
                  </div>
                  <button
                    className="py-3 rounded-md bg-urban-green text-white px-10 w-full"
                    onClick={handleSubmit}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
            {/* ----- right side------ */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="border border-gray-300 w-full lg:w-11/12 p-4 px-2 lg:px-7 2xl:px-8">
                <h2 className="text-xl lg:text-2xl">Map</h2>
                <div className="mt-4">
                  <div className="h-80 bg-slate-100 overflow-hidden">
                    {/* <MapWithPath /> */}
                    <LazyMap />
                  </div>

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

      {showSeatModal && (
        <SeatArrangementDialog
          isOpen={showSeatModal}
          setisopen={setshowSeatModal}
          handleSelect={handleChange}
          currentPassengerIndex={currentPassager}
        />
      )}
    </>
  );
}
