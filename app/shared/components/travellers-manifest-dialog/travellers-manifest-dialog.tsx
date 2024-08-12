"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import AOS from "aos";
import "./travellers-manifest-dialog.scss";
import { useRouter } from "next/navigation";

type PropT = {
  isOpen?: boolean;
  setisopen: Function;
};
export default function TravellersManifestDialog({ isOpen, setisopen }: PropT) {
  const [open, setopen] = useState(isOpen);
  const router = useRouter();

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
          <h3 className="text-2xl w-full text-center text-urban-green">
            Traveller’s Manifest
          </h3>
          <div className="mt-10 px-10 2xl:mt-14">
            <div className="flex flex-col gap-4 mt-4 get-card-form 2xl:gap-6">
              <div className="flex flex-col gap-y-2">
                <label>Passenger's Next Of Kin</label>
                <input className="p-3 w-full border border-[#D9D9D9] rounded-md" />
              </div>
              {/* ---- */}
              <div className="flex flex-col gap-y-2">
                <label>Next Of Kin Phone Number</label>
                <input className="p-3 w-full border border-[#D9D9D9] rounded-md" />
              </div>
              {/* --- */}

              {/* ----- */}
              <div className="flex flex-col gap-y-2 mt-4 w-5/12">
                <button
                  className="py-3 px-6 rounded-md bg-urban-green text-white 2xl:py-4 2xl:px-10 2xl:text-xl"
                  onClick={() => router.push("./preview")}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
