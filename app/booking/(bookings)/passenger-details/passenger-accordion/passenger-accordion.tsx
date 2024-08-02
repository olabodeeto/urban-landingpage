"use client";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function PassengerAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full p-2 boxShadow">
      <div className="flex items-center justify-between border border-gray-200 p-2">
        <div className="text-lg text-urban-green w-3/12">
          1 Passenger’s info
        </div>
        <div className="h-8 border border-gray-400"></div>
        <div className="flex items-center justify-between w-5/12">
          <span className="text-sm text-gray-400">Tade Ogunbade</span>
          <span className="text-sm text-gray-400">
            {" "}
            Seat No: <span className="text-urban-black">B1</span>
          </span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </div>
      </div>
      {isExpanded && (
        <div className="min-h-60 border border-red-400 mt-4"></div>
      )}
    </div>
  );
}
