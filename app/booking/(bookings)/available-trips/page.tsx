"use client";
import Image from "next/image";
import Footer from "@/app/shared/components/footer/footer";
import React, { useEffect, useState } from "react";
import "./available-trips.scss";
import SearchIcon from "@/app/shared/components/icons/search-icon";
import TripCard from "@/app/shared/components/trip-card/trip-card";
import { useRouter } from "next/navigation";
import { getTrips } from "@/app/service/auth.service";
import Spinner from "@/app/shared/components/Spinner";
import { toast } from "react-toastify";
import { ITrips } from "@/app/shared/models/trips.model";

export default function availableTrips() {
  const [isloading, setisloading] = useState(false);
  const [allTrips, setallTrips] = useState<ITrips>([]);
  const [selectedTab, setselectedTab] = useState("Bus");
  const [payload, setpayload] = useState<any>({});
  const tabs = ["Bus", "Mini-Bus", "Sedan"];

  const router = useRouter();

  const fetchTrips = (payload?: any) => {
    const queryApi = () => {
      setisloading(true);
      getTrips(payload).subscribe({
        next: (res) => {
          if (res) {
            console.log("===>trips", res);
            setallTrips(res.data);
            setisloading(false);
          } else {
            toast.info(res.error);
          }
        },
        error: (msg) => {
          toast.error(msg.message);
          setisloading(false);
        },
        complete: () => {
          setisloading(false);
        },
      });
    };

    queryApi();
  };

  useEffect(() => {
    const prevPageData: any = localStorage.getItem("firstStep");
    if (prevPageData == null || prevPageData.length < 1) {
      router.push("/");
    } else {
      const firstStep = JSON.parse(prevPageData);
      const {
        departureState,
        destinationState,
        travelDate,
        numberOfPassagers,
      } = firstStep;
      const lsPayload = {
        fromState: departureState,
        toState: destinationState,
        travelDate: new Date(travelDate).toISOString(),
        vehicleType: "bus",
      };
      setpayload(lsPayload);
      fetchTrips(lsPayload);
    }
  }, []);

  return (
    <>
      <main className="-mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] py-10 px-4">
        <section className="m-h-96  w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12 available-trips-page">
          <div className="w-full flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between available-trip-header">
            <h2 className="text-xl 2xl:3xl">Available Trips</h2>
            <div className="min-w-4/12 available-trip-search-input">
              <SearchIcon />
              <input />
            </div>
          </div>
          <div className="mt-10">
            <label className="text-xl text-urban-green">
              Select Vehicle Type
            </label>
            <div className="flex items-center gap-4 mt-6">
              {tabs.map((tab, index: number) => (
                <div
                  key={index}
                  className={`${
                    selectedTab === tab && " border-urban-green"
                  } py-2 px-5 2xl:py-3 2xl:px-6 2xl:text-xl font-light rounded-full text-center bg-gray-200 cursor-pointer border hover:border-urban-green`}
                  onClick={() => {
                    setselectedTab(tab);
                    fetchTrips({ ...payload, ["vehicleType"]: tab });
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center items-center mt-10">
              {isloading ? (
                <Spinner isLoading size={60} />
              ) : (
                <div>
                  {allTrips.length ? (
                    <div className="trips-card-container w-full grid grid-cols-1 gap-y-14 lg:gap-y-10 lg:grid-cols-3 lg:gap-x-10">
                      {allTrips.map((obj: any, index: number) => (
                        <div key={index + 1}>
                          <TripCard data={obj} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full min-h-60 flex justify-center items-center">
                      <h1>No available trip</h1>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
