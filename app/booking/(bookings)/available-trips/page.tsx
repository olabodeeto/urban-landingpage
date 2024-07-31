import Footer from "@/app/shared/components/footer/footer";
import React from "react";
import "./available-trips.scss";
import SearchIcon from "@/app/shared/components/icons/search-icon";

export default function availableTrips() {
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
            <div>tabs</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
