"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./passenger-payment.scss";
import Footer from "@/app/shared/components/footer/footer";
import { useRouter } from "next/navigation";
import SimilarTripCard from "./similar-trip-card";
import MapWithPath from "@/app/shared/components/map-with-path/map-with-path";
import SeatArrangementDialog from "@/app/shared/components/seat-arrange-dialog/seat-arrangement-dialog";
import TravellersManifestDialog from "@/app/shared/components/travellers-manifest-dialog/travellers-manifest-dialog";

export default function PassengerDetails() {
  const noPassengers = [1, 2];
  const [showManifestModal, setshowManifestModal] = useState(false);
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

  const handleSubmit = () => {
    router.push("./preview");
  };

  const LazyMap = dynamic(
    () => import("@/app/shared/components/map-with-path/map-with-path"),
    {
      ssr: false,
    }
  );

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
                <span className="text-xl 2xl:text-2xl">Payment</span>
              </div>
              <div className="mt-4">
                <div className="mt-6">
                  <h4 className="text-lg 2xl:text-2xl">Payment</h4>
                  <p className=" w-full lg:w-10/12 text-base font-light text-gray-600">
                    You are about to make the payment of N13,000.00 . Select
                    payment option below
                  </p>
                  <div className="mt-4 flex flex-col gap-y-4">
                    <div className="w-full p-3 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
                      <span className="text-xs font-light">Pay with</span>
                      <Image
                        src="/assets/paystack.svg"
                        width={80}
                        height={40}
                        alt=""
                      />
                    </div>

                    <div className="w-full p-3 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
                      <span className="text-xs font-light">Pay with</span>
                      <Image
                        src="/assets/rave.svg"
                        width={45}
                        height={20}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h2 className="text-lg 2xl:text-2xl">
                      Fill Traveller's Manifest
                    </h2>
                    <div
                      className="w-full rounded-lg bg-[#036E030F] p-3 cursor-pointer"
                      onClick={() => setshowManifestModal(true)}
                    >
                      <h4 className="text-urban-green">Tap here to fill</h4>
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-10">
                  <button
                    className="py-3 rounded-md bg-urban-green text-white px-10"
                    onClick={handleSubmit}
                  >
                    Submit
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

      {showManifestModal && (
        <TravellersManifestDialog
          isOpen={showManifestModal}
          setisopen={setshowManifestModal}
        />
      )}
    </>
  );
}
