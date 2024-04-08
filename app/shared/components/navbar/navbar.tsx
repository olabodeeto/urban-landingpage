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
      <div className="w-full lg:w-11/12 m-auto bg-white rounded-lg p-4">
        {/* desktop navbar */}
        <div className="hidden lg:block py-2">
          <div className="flex flex-row items-center justify-between">
            <div className="w-2/12">
              <Image src="./logo.svg" width={100} height={35} alt="" />
            </div>
            <div className="w-6/12 flex justify-start">
              <ul className="flex items-center gap-10">
                {tabsData.map((obj, index: number) => (
                  <li
                    onClick={() => {
                      setselectedTab(obj.title);
                    }}
                    key={index}
                    className={` cursor-pointer hover:underline hover:text-urban-green ${
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
            <div className="w-4/12 flex justify-end items-center gap-4">
              <button className="px-10 py-3 rounded-md text-urban-green">
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
