"use client";

import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./passenger-details.scss";
import Footer from "@/app/shared/components/footer/footer";
import { useRouter } from "next/navigation";
import PassengerAccordion from "./passenger-accordion/passenger-accordion";

export default function PassengerDetails() {
  const router = useRouter();
  return (
    <>
      <main className="-mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] py-10 px-4">
        <section className="m-h-96  w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12 passenger-details-trips-page">
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
                <PassengerAccordion />
              </div>
            </div>
            {/* ----- right side------ */}
            <div className="w-full lg:w-1/2"></div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
