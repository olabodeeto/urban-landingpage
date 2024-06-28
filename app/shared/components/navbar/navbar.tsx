"use client";
import Image from "next/image";
import React, { useState } from "react";
import PrimaryBtn from "../buttons/primary-btn";

export default function Navbar() {
  const [selectedTab, setselectedTab] = useState("Home");

  const tabsData = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About Us", path: "/about" },
    { id: 3, title: "Fleet", path: "/fleet" },
    { id: 4, title: "Park", path: "/park" },
    { id: 5, title: "Agency", path: "/agency" },
    { id: 6, title: "Traveler’s Club", path: "/Travelers-Club" },
  ];

  return (
    <div className="w-full p-4 sticky top-2">
      <div className="w-full lg:w-11/12 2xl:w-10/12 m-auto bg-white rounded-lg px-4 py-2 2xl:py-4 2xl:px-6 xl:max-w-8xl">
        {/* desktop navbar */}
        <div className="hidden lg:block py-1">
          <div className="flex flex-row items-center justify-between">
            <div className="lg:w-1/12 xl:w-2/12">
              <Image
                src="./logo.svg"
                width={80}
                height={35}
                alt=""
                className="2xl:w-24"
              />
            </div>
            <div className="lg:w-8/12 xl:w-6/12 flex justify-start">
              <ul className="flex items-center lg:gap-8 xl:gap-10">
                {tabsData.map((obj, index: number) => (
                  <li
                    onClick={() => {
                      setselectedTab(obj.title);
                    }}
                    key={index}
                    className={` cursor-pointer lg:text-base xl:text-base 2xl:text-lg hover:underline hover:text-urban-green ${
                      selectedTab === obj.title
                        ? "font-semibold text-urban-green underline"
                        : "font-light"
                    }`}
                  >
                    {obj.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-4/12 lg:w-2/12 flex justify-end items-center gap-4">
              <button className="px-10 py-3 rounded-md text-urban-green 2xl:text-lg">
                Login
              </button>
              <PrimaryBtn title="Register" handlePress={() => ""} />
            </div>
          </div>
        </div>

        {/* ---------- */}

        {/* mobile navbar */}
        <div className="lg:hidden py-2">
          <div className="flex flex-row items-center justify-between">
            <div>
              <Image src="./logo.svg" width={80} height={35} alt="" />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* ---------- */}
      </div>
    </div>
  );
}
