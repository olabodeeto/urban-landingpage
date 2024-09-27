import router from "next/router";
import React, { useEffect, useRef } from "react";

type PropT = {
  setCompanyPage: Function;
  setisCompanyDropOpen: Function;
  isCompanyDropOpen: boolean;
};

export default function CompanyDesktopDrop({
  setisCompanyDropOpen,
  setCompanyPage,
  isCompanyDropOpen,
}: PropT) {
  const modalRefcard: any = useRef(null);

  const handleOutsideClick = (event: any) => {
    // Check if the click is outside the modal
    if (modalRefcard.current && !modalRefcard.current.contains(event.target)) {
      setisCompanyDropOpen(false); // Close the modal
    }
  };

  useEffect(() => {
    if (isCompanyDropOpen) {
      // Add event listener when modal is open
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove event listener when modal is closed
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCompanyDropOpen]);

  if (!isCompanyDropOpen) return null; // Return null if modal is not open

  return (
    <div className="travelersItems-container-comp py-4" ref={modalRefcard}>
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex flex-row gap-2">
        <div className="w-1/2 flex flex-col gap-4">
          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Urban Card");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/urban-card");
            }}
          >
            <img src="./assets/parkIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Park</h4>
              <p className="text-sm">Manage your park at one glance</p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Urban Card");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/urban-card");
            }}
          >
            <img src="./assets/fleetIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Fleet</h4>
              <p className="text-sm">Manage your park at one glance</p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Urban Card");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/urban-card");
            }}
          >
            <img src="./assets/providersIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Provider’s</h4>
              <p className="text-sm">Manage your park at one glance</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Urban Card");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/urban-card");
            }}
          >
            <img src="./assets/travelersIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Traveler’s Club</h4>
              <p className="text-sm">Manage your park at one glance</p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Urban Card");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/urban-card");
            }}
          >
            <img src="./assets/travelerskit.svg" alt="" />
            <div>
              <h4 className="font-bold">Traveler’s Kit</h4>
              <p className="text-sm">Manage your park at one glance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
