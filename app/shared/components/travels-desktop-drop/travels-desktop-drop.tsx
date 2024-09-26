import router from "next/router";
import React from "react";

type PropT = {
  settravelersPage: Function;
  setisTravelsDropOpen: Function;
  isTravelsDropOpen: boolean;
};

export default function TravelsDesktopDrop({
  setisTravelsDropOpen,
  settravelersPage,
  isTravelsDropOpen,
}: PropT) {
  return (
    <div className="travelersItems-container">
      <div
        className="item font-creato font-light p-2"
        onClick={() => {
          settravelersPage("Urban Card");
          console.log("nav called");
          setisTravelsDropOpen(!isTravelsDropOpen);
          router.push("/urban-card");
        }}
      >
        Urban Card
      </div>

      <div
        className="item font-creato font-light p-2"
        onClick={() => {
          settravelersPage("Traveler's Kit");
          setisTravelsDropOpen(!isTravelsDropOpen);
          console.log("nav called");
          router.push("/travelers-kit");
        }}
      >
        Traveler's kit
      </div>
      <div
        className="item font-creato font-light p-2"
        onClick={() => {
          settravelersPage("Hotels");
          setisTravelsDropOpen(!isTravelsDropOpen);
          router.push("/hotels");
        }}
      >
        Hotels
      </div>
    </div>
  );
}
