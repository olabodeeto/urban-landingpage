import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { useRouter } from "next/navigation";
import { ITrip } from "../../models/trips.model";
import {
  convertDate,
  convertTo12HourFormat,
  truncateString,
} from "../../utils/utils";

type PropT = {
  data: ITrip;
};

export default function TripCard({ data }: PropT) {
  const [isparkInfoOpen, setisparkInfoOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const {
    tripCode,
    fare,
    vehicleType,
    park,
    totalSeats,
    bookedSeats,
    endState,
    endCity,
    date,
    id: tripId,
    time,
  } = data;
  const {
    name: parkname,
    state: parkState,
    city: parkCity,
    fullAddress: parkAddr,
    longitude,
    latitude,
  } = park;

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleBookTrip = () => {
    const secondStep = {
      tripCode,
      parkAddr,
      parkCity,
      parkState,
      parkname,
      fare,
      vehicleType,
      departureCity: parkCity,
      destinationCity: endCity,
      departureTime: time,
      departureDate: date,
      lat: "",
      long: "",
    };
    localStorage.setItem("secondStep", JSON.stringify(secondStep));
    router.push("/booking/passenger-details");
  };

  const journey: string = `${parkCity} to ${endCity}`;
  const availableSeats = totalSeats && totalSeats - bookedSeats;

  return (
    <div className="trip-card w-full h-[30rem] bg-white overflow-hidden rounded-xl card-shadow relative">
      <div className="w-full bg-urban-green h-44 lg:h-40 flex items-center py-2 px-4">
        <div className="flex justify-between w-full">
          <div className="text-white flex flex-col justify-between w-full gap-4 lg:gap-3">
            <p className="text-sm font-light">
              Trip code: <span className="font-bold">{tripCode}</span>
            </p>
            <h3 className="text-2xl lg:text-3xl font-light">
              {truncateString(journey, 20)}
              {/* {journey} */}
            </h3>
            <button className="bg-white rounded-full p-2 text-[0.7rem] w-6/12 lg:w-[44%] text-urban-black">
              {availableSeats! > 0 ? availableSeats : 0} Seats available
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
                {parkAddr}, {parkState}
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
                      <div>{parkAddr}</div>
                    </div>
                    <div className="flex items-center w-full text-xs">
                      <div className="w-5/12 text-gray-500 font-light">
                        Departure time:
                      </div>
                      <div>{convertTo12HourFormat(time)}</div>
                    </div>
                    <div className="flex items-center w-full text-xs">
                      <div className="w-5/12 text-gray-500 font-light">
                        Departure Date:
                      </div>
                      <div>{convertDate(date)}</div>
                    </div>
                    <div className="flex items-center w-full text-xs">
                      <div className="w-5/12 text-gray-500 font-light">
                        Park Tel:
                      </div>
                      <div>{park.parkOwner.user.phoneNumber ?? "---"}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between w-full mt-[5rem] lg:mt-[4.8rem] 2xl:mt-20">
            <div className="w-8/12">
              <h5 className="text-sm font-bold text-urban-green">
                Destination City
              </h5>
              <p className="font-light text-sm lg:text-base">
                {endCity}, {endState}
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8  px-4 flex justify-between items-center">
        <div
          className="text-center border border-urban-green rounded-full text-urban-green text-xs lg:text-sm py-2 px-2 lg:px-4 cursor-pointer"
          onClick={handleBookTrip}
        >
          Book Trip
        </div>
        <div>
          <span className="text-sm text-urban-green font-light">
            Departure Time
          </span>
          <p className="text-xs 2xl:text-sm">{convertTo12HourFormat(time)}</p>
        </div>

        <div>
          <span className="text-urban-green text-sm">Amount</span>
          <p className="text-sm 2xl:text-base">N{fare}</p>
        </div>
      </div>

      {/* <div className="absolute w-10/12 right-2 bottom-2 min-h-40 bg-white top-2 border border-red-400"></div> */}
    </div>
  );
}
