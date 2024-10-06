import React from "react";
import Image from "next/image";
import "./merchant.scss";

export default function MerchantPage() {
  return (
    <main className="relative ">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[82vh] bg-merchantBg bg-cover py-10 px-4 flex flex-col items-center">
        <div className="urbancardpage-hero-container relative">
          <div className="_cardPage_hero_leftSide flex flex-col gap-y-5">
            <h2 className="font-creato cardpage-heroText">
              Making life easier for people on the move
            </h2>
            <h4
              className="cardpage-heroText-content font-creato font-light"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Experience great convenience and flexibility when you explore the
              county. Spend easily across our merchant ecosystem.
            </h4>
            <div className="flex items-center gap-x-4 mt-2 2xl:mt-4">
              <div className="py-4 lg:py-3 2xl:py-5 px-8 2xl:px-12 bg-white rounded-lg font-creato font-semibold border-2 border-white cardhereBtn cursor-pointer">
                Get Started
              </div>
            </div>
          </div>

          <div className="_merchantPage_hero_rigthSide">
            <Image
              src="/assets/nigeria.png"
              width={840}
              height={400}
              alt=""
              className=""
              data-aos="flip-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
