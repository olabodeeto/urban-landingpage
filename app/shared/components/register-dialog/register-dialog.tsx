"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import AOS from "aos";
import "./register-dialog.scss";
import Link from "next/link";

type PropT = {
  isOpen?: boolean;
  setisopen: Function;
};
export default function RegisterDialog({ isOpen, setisopen }: PropT) {
  const [open, setopen] = useState(isOpen);

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
      className={`travDialogBody h-screen w-screen fixed bg-white ${
        open ? "" : "hidedialog"
      }`}
    >
      <div
        className="travDialog-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex justify-end w-full">
          <div
            className="cursor-pointer pr-4 2xl:pr-6 2xl:pt-2"
            onClick={() => setisopen(!open)}
          >
            <CloseIcon />
          </div>
        </div>
        <div>
          <h3 className="text-2xl w-full text-center text-urban-green"></h3>
          <div className="mt-6 px-10 2xl:mt-14 flex flex-col gap-y-8">
            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <h2 className="text-xl font-creato font-bold">
                Register as Fleet Owner
              </h2>
              <Link href="https://urban.ng" target="_blank">
                <button className="text-sm underline bg-[#6cc56c39] py-1 px-4 rounded-md font-light">
                  www.urban.ng
                </button>
              </Link>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <h2 className="text-xl font-creato font-bold">
                Register as Park Owner
              </h2>
              <Link href="https://urban.ng" target="_blank">
                <button className="text-sm underline bg-[#6cc56c39] py-1 px-4 rounded-md font-light">
                  www.urban.ng
                </button>
              </Link>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <h2 className="text-xl font-creato font-bold">
                Register as Park Manager
              </h2>
              <Link href="https://urban.ng" target="_blank">
                <button className="text-sm underline bg-[#6cc56c39] py-1 px-4 rounded-md font-light">
                  www.urban.ng
                </button>
              </Link>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <h2 className="text-xl font-creato font-bold">
                Register as Provider Agency
              </h2>
              <Link href="https://urban.ng" target="_blank">
                <button className="text-sm underline bg-[#6cc56c39] py-1 px-4 rounded-md font-light">
                  www.urban.ng
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
