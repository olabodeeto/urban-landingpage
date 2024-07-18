import Image from "next/image";
import React from "react";
import "./footer.scss";

export default function Footer() {
  const today = new Date();

  const currentYear = today.getFullYear();
  return (
    <footer className=" bg-urban-black w-full">
      <div className="pt-28">
        {/* ===== desktop footer ================ */}
        <div className="lg:w-[85%] m-auto hidden lg:block">
          <div className="flex justify-between items-start text-white">
            <div className="w-2/12 pr-2">
              <Image
                src="/assets/footer-logo.svg"
                alt=""
                width={120}
                height={120}
                className="w-28 xl:w-32"
              />
              <p className="mt-6 italic font-creato font-light text-xs xl:text-sm">
                We are a traveler-centric brand with a focus on redefining
                Africa's approach to travel.
              </p>

              <div className="mt-4">
                <div className="flex gap-2 mb-4">
                  <Image
                    src="/assets/MFooterEmailIcon.svg"
                    width={32}
                    height={28}
                    alt=""
                    className=""
                  />
                  <div className="text-white text-xs xl:text-sm pr-4 font-thin">
                    <p>Email</p>
                    <p>contact@urban.com</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Image
                    src="/assets/MCallIcon.svg"
                    width={32}
                    height={28}
                    alt=""
                    className=""
                  />
                  <div className="text-white text-xs xl:text-sm pr-4 font-thin">
                    <p>Call Us</p>
                    <p>(00) 112 365 489</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">Growth & Partnership</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <li>Fleets</li>
                <li>Parks</li>
                <li>Agencies</li>
                <li>Traveler's Club</li>
                <li>Traveler’s Kits</li>
                <li>Hotels</li>
                <li>Urban card</li>
              </ul>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">About Us</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <li>Why Urban</li>
                <li>Urban Experience</li>
                <li>Our Vision</li>
                <li>Core Values</li>
              </ul>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">Location</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <li>Abuja</li>
                <li>Jos</li>
                <li>Makurdi</li>
                <li>Minna</li>
                <li>View more</li>
              </ul>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">Policies</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <li>Terms Of Use</li>
                <li>Refund Policy</li>
                <li>Behavior Policy</li>
                <li>Trip Cancellation Policy</li>
                <li>Charter Terms</li>
                <li>Hotels T&C</li>
                <li>Cards T&C</li>
              </ul>
            </div>
            <div className="w-3/12 pl-4 pr-4">
              <h2 className="font-creato font-thin italic">Reach out to us</h2>
              <div className="mt-4">
                <form>
                  <input className="text-gray-600 bg-white rounded-full w-full 2xl:w-10/12 footer-input" />
                  <button className="py-3 px-4 rounded-full bg-green-700 text-white mt-2 font-creato text-xs">
                    Send Now
                  </button>
                </form>
                <div className="mt-6 flex items-center gap-2">
                  <div>
                    <Image
                      src="/assets/linkedicon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      src="/assets/twittericon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/fbicon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/igicon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      src="/assets/youtubeicon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 text-center text-white mt-10 text-sm font-creato font-thin">
            © Urban {currentYear}. All Rights Reserved.
          </div>
        </div>

        {/* ======================================= */}
      </div>
    </footer>
  );
}
