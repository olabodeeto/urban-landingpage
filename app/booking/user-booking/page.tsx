import Footer from "@/app/shared/components/footer/footer";
import Image from "next/image";
import React from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import "./user-booking.scss";

export default function UserBooking() {
  return (
    <main className="-mt-40">
      <section className="min-h-80 w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-28 lg:mt-60 2xl:w-10/12">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold font-creato">
              Check you booking here
            </h2>
            <div className="w-full lg:w-10/12  mt-10 pb-10">
              <form className="check-booking-form">
                <div className="flex flex-col gap-2">
                  <label className="font-light">
                    Enter your booking code here
                  </label>
                  <div className="flex items-center justify-between">
                    <input className="px-2 w-8/12 border border-gray-400 h-10 rounded-lg" />
                    <button className="py-2 rounded-lg px-6 bg-urban-green text-white">
                      Search
                    </button>
                  </div>
                </div>
              </form>

              {/* ----- booking details container */}
              <div className="w-full mt-10">
                <div className="w-full flex flex-col justify-start items-center h-28 overflow-hidden relative bg-cover">
                  <Image
                    src="/assets/bookingdetailsbg.png"
                    width={300}
                    height={140}
                    alt=""
                    className="w-full  object-cover object-center"
                  />
                  <div className="bg-transparent w-full absolute h-28 flex flex-col justify-center items-center gap-2">
                    <Image
                      src="/assets/footer-logo.svg"
                      alt=""
                      width={20}
                      height={120}
                      className="w-12 xl:w-20 xl:mt-2"
                    />
                    <h3 className="text-white mb-3 lg:mb-0">TRIP RECEIPT</h3>
                  </div>
                </div>
                <div className="pt-4 pb-10 px-3 xl:px-6 flex flex-col gap-3 shadow">
                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Booking Code
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      3444763ZZXXJ
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Booking Reference
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      344476358KJ
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Passenger’s Name
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      Hassan Tunmise
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Passenger’s Phone No.
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      09045678937
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Departure City
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      Sagamu
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Departure Time:
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      08:00 AM
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Destination City:
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      Abuja
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Trip Code:
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      SAGLAG
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Price per seats:{" "}
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      N12,500.00
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Date
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      Sept. 10.2023
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Booking Time
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      10:00 AM
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Seat Number
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      A1
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      VAT
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      N2,000.00
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Stamp Authentication
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      N100
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-light text-base block w-1/2">
                      Total Fare
                    </span>
                    <span className="font-light text-base text-urban-green block w-1/2">
                      N13,000.00
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 xl:px-6">
                  <div className="w-1/2 flex items-center h-12 justify-center bg-urban-green text-white rounded-md gap-2 cursor-pointer">
                    Share Receipt
                    <ShareOutlinedIcon />
                  </div>
                  <div className="w-1/2 flex items-center h-12 justify-center border border-urban-green bg-white text-urban-green rounded-md gap-2 cursor-pointer">
                    Print Receipt
                    <LocalPrintshopOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="flex justify-end">
              <div className="h-[50rem] w-8/12 relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/bookingslide.svg"
                  alt=""
                  width={20}
                  height={120}
                  className=" w-full object-cover object-center rounded-lg"
                />
                <div className="bg-transparent w-full h-[50rem] absolute top-0">
                  <div className="h-full">
                    <h2 className="px-4 text-5xl text-white text-center w-8/12 m-auto mt-32 mb-28">
                      Advertise with us
                    </h2>

                    <div className="flex justify-center p-4 mt-40 mb-52">
                      <button className="border-2 bg-transparent border-white rounded-full p-4 px-20 text-white font-light booking-sendmail-btn">
                        Send us mail today
                      </button>
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <div className="w-4 h-4 bg-urban-lightGreen rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
