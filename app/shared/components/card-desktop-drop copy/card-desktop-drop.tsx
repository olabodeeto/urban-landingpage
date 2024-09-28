import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

type PropT = {
  setCardPage: Function;
  setisCardDropOpen: Function;
  isCardDropOpen: boolean;
};

export default function CardDesktopDrop({
  setisCardDropOpen,
  setCardPage,
  isCardDropOpen,
}: PropT) {
  const modalRefcard: any = useRef(null);
  const router = useRouter();

  const handleOutsideClick = (event: any) => {
    // Check if the click is outside the modal
    if (modalRefcard.current && !modalRefcard.current.contains(event.target)) {
      setisCardDropOpen(false); // Close the modal
    }
  };

  useEffect(() => {
    if (isCardDropOpen) {
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
  }, [isCardDropOpen]);

  if (!isCardDropOpen) return null; // Return null if modal is not open

  return (
    <div className="travelersItems-container-card py-4" ref={modalRefcard}>
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex flex-row gap-2">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-row justify-between hover:bg-slate-100 p-2">
            <div
              className="item font-creato font-light flex flex-row gap-2 items-start"
              onClick={() => {
                setCardPage("Urban Card");
                setisCardDropOpen(!isCardDropOpen);
                router.push("/urban-card");
              }}
            >
              <img src="./assets/coopCardIcon.svg" alt="" />
              <div className="-mt-1">
                <h4 className="font-bold">Corporate Card</h4>
                <p className="text-sm">
                  Experience the all-in-one travel and expense platform.
                </p>
              </div>
            </div>
            <div className="w-4/12">
              <button className="bg-black text-white rounded-full px-4 py-2 text-sm">
                Request a demo
              </button>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start  hover:bg-slate-100 p-2"
            onClick={() => {
              setCardPage("Urban Card");
              setisCardDropOpen(!isCardDropOpen);
              router.push("/urban-card");
            }}
          >
            <img src="./assets/personalCardIcon.svg" alt="" />
            <div className="-mt-1">
              <h4 className="font-bold">Personal Card</h4>
              <p className="text-sm">Step out into the world confidently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
