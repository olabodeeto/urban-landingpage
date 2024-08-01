import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

export default function TripCard() {
  const [isparkInfoOpen, setisparkInfoOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="trip-card w-full h-[30rem] bg-white overflow-hidden rounded-xl card-shadow relative">
      <div className="w-full bg-urban-green h-44 lg:h-40 flex items-center py-2 px-4">
        <div className="flex justify-between w-full">
          <div className="text-white flex flex-col justify-between w-full gap-4 lg:gap-3">
            <p className="text-sm font-light">
              Trip code: <span className="font-bold">OGLA01</span>
            </p>
            <h3 className="text-2xl lg:text-3xl font-light">Sagamu to lagos</h3>
            <button className="bg-white rounded-full p-2 text-[0.7rem] w-6/12 lg:w-[44%] text-urban-black">
              4 Seats available
            </button>
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <Image
              src="/assets/urlogo.svg"
              width={100}
              height={100}
              alt=""
              className="w-5/12"
            />
          </div>
        </div>
      </div>
      <div className="flex items-start p-4 gap-2">
        <div>
          <Image
            src="/assets/trip-timeline.svg"
            width={100}
            height={100}
            alt=""
            className="trip-timeline"
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between w-full">
            <div className="w-6/12 lg:w-7/12">
              <h5 className="text-sm font-bold text-urban-green">
                Pickup park
              </h5>
              <p className="font-light text-sm lg;text-base">
                Sagamu Express Junction, Ogun State
              </p>
            </div>
            <div className="">
              <button
                className="text-xs py-2 rounded-full text-urban-green h-25 px-2 lg:px-4 bg-[#6cc56c48]"
                aria-describedby={id}
                type="button"
                onClick={() => setisparkInfoOpen(!isparkInfoOpen)}
              >
                See Park Info
              </button>
              {isparkInfoOpen && (
                <div className="h-52 rounded-xl w-full right-0 p-2 px-4 lg:w-10/12 bg-white absolute z-10 card-shadow py-4">
                  <h3 className="text-center text-urban-green">Park Info</h3>
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-center w-full text-xs">
                      <div className="w-5/12 text-gray-500 font-light">
                        Park Address:
                      </div>
                      <div>No 12, Isale oko Sagamu</div>
                    </div>
                    <div className="flex items-center w-full text-xs">
                      <div className="w-5/12 text-gray-500 font-light">
                        Departure time:
                      </div>
                      <div>09:00AM</div>
                    </div>
                    <div className="flex items-center w-full text-xs">
                      <div className="w-5/12 text-gray-500 font-light">
                        Departure Date:
                      </div>
                      <div>23/03/2023</div>
                    </div>
                    <div className="flex items-center w-full text-xs">
                      <div className="w-5/12 text-gray-500 font-light">
                        Park Tel:
                      </div>
                      <div>09034567892</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between w-full mt-14 lg:mt-16 2xl:mt-20">
            <div className="w-8/12">
              <h5 className="text-sm font-bold text-urban-green">
                Destination City
              </h5>
              <p className="font-light text-sm lg:text-base">Amac, Abuja</p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8  px-4 flex justify-between items-center">
        <div className="text-center border border-urban-green rounded-full text-urban-green text-xs lg:text-sm py-2 px-2 lg:px-4">
          Book Trip
        </div>
        <div>
          <span className="text-sm text-urban-green font-light">
            Departure Time
          </span>
          <p className="text-xs 2xl:text-sm">09:00 AM</p>
        </div>

        <div>
          <span className="text-urban-green text-sm">Amount</span>
          <p className="text-sm 2xl:text-base">N30,000.00</p>
        </div>
      </div>

      {/* <div className="absolute w-10/12 right-2 bottom-2 min-h-40 bg-white top-2 border border-red-400"></div> */}
    </div>
  );
}
