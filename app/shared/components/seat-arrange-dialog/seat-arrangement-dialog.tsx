"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import AOS from "aos";
import "./seat-arrange.scss";

type PropT = {
  isOpen?: boolean;
  setisopen: Function;
  handleSelect: Function;
  currentPassengerIndex: any;
};
export default function SeatArrangementDialog({
  isOpen,
  setisopen,
  handleSelect,
  currentPassengerIndex,
}: PropT) {
  const [open, setopen] = useState(isOpen);

  const arrangements = [
    { title: "A1", isAvailable: true },
    { title: "A2", isAvailable: true },
    { title: "A3", isAvailable: false },
    { title: "A4", isAvailable: true },

    { title: "B1", isAvailable: false },
    { title: "B2", isAvailable: true },
    { title: "B3", isAvailable: true },
    { title: "B4", isAvailable: false },

    { title: "C1", isAvailable: true },
    { title: "C2", isAvailable: false },
    { title: "C3", isAvailable: true },
    { title: "C4", isAvailable: true },
  ];

  const seats = arrangements.map((obj, index: number) => (
    <div
      className={`w-full h-20 lg:h-28 ${
        obj.isAvailable ? "bg-green-500 cursor-pointer" : "bg-white"
      } flex items-center justify-center rounded-md`}
      key={index}
      onClick={() => {
        if (obj.isAvailable) {
          setisopen(false);
          handleSelect(currentPassengerIndex, "seat", obj.title);
        }
      }}
    >
      {obj.title}
    </div>
  ));

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Clean up when the component is unmounted or when `isOpen` changes
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  useEffect(() => {
    setopen(isOpen);
  }, [isOpen]);

  if (!open) return null;
  return (
    <div
      className={`seatArrangeBody h-screen w-screen fixed bg-white ${
        open ? "" : "hidedialog"
      }`}
    >
      <div
        className="seatDialog-card-container pt-2 pb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex justify-end w-full">
          <div
            className="cursor-pointer pr-6 pt-4 2xl:pr-6 2xl:pt-4"
            onClick={() => setisopen(!open)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="pb-4">
          <h3 className="text-xl w-full pl-4 text-urban-green font-light">
            Seat Arrangement
          </h3>
          <div className="mt-2 px-2">
            <div className="p-2">
              {/* <div className="py-3 rounded-lg bg-slate-200 text-center">
                Driver's seat
              </div> */}
              <div className="bg-slate-100 min-h-60 p-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
                {seats}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
