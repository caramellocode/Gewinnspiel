import { BsCheck2 } from "react-icons/bs";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  return (
    <section className="">
      {/* Hier das Bild als Titelbild verwenden */}
      <img src="/images/home-1/Scr-Damentag_Oktober.png" alt="Titelbild" />

      {/* Service Details content */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container">
          {/* image and Food list */}
          <div className="grid items-center grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
            <div
              className="col-span-6 md:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img src="/images/home-1/Scr-Damentag_Oktober.png" alt="" />
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className=" bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-5 md:py-10 lg:px-6 lg:py-11 2xl:px-10 2xl:py-[50px]  grid-flow-row-dense">
                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-7">
                  JEDEN DIENSTAG
                </h4>
                <div
                  className="grid items-center gap-[25px] "
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 ">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Start -
                      <span className="text-khaki"> 7.00 AM to 10.30 Uhr</span>
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Lunch -{" "}
                      <span className="text-khaki"> 1.00 PM to 2.30 PM</span>
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Supper -{" "}
                      <span className="text-khaki"> 6.00 PM to 7.00 PM</span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Verlosung -{" "}
                      <span className="text-khaki"> 8.30 PM to 10.00 PM</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurants center */}
          <div className="pt-5 lg:pt-[35px]  pr-3">
            <p className="text-base font-Lora text-khaki">FOODS</p>
            <h2 className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold">
              Ladys ihr hab es doch verdient , und das jeden Dienstag bei uns
            </h2>
            <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
              Der beliebte Caramello findet auch im April wieder statt. Sie
              erhalten jeweils am Montag ein köstliches Tagesgetränk, CHF
              10.– Spielguthaben und ein Gewinnticket für die Verlosung am 29.
              April 2024. Der Hauptpreis ist ein Wertgutschein vom Tschuggen
              Grand Hotel, Arosa im Wert von CHF 600.– + CHF 500.– in bar.
              Viel Glück!
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 mt-5">
              <button className="btn-items">
                Reservation
              </button>
              <button className="btn-items">
                Routenplaner
              </button>
              <button className="btn-items">
                Weiter Teilen
              </button>
            </div>

            {/* Restaurant Rules */}
            <div
              className="py-10 lg:py-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                Restaurant Rules
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Professionally deliver fully researched scenarios with turnkey
                communities. Competently unleash empowered applications without
              
              </p>
            </div>
            {/* Dress Code Rules */}
            <div
              className="pb-10 lg:pb-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                Dress Code
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Professionally deliver fully researched scenarios with turnkey
                communities competently
              </p>
              <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Quickly generate bricks-and-clicks
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Interactively cultivate visionary platforms
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Energistically envisioneer resource
                  </span>
                </li>
              </ul>
            </div>
            {/* Dress Code Rules */}
            <div className="" data-aos="zoom-in-up" data-aos-duration="1000">
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                Terrace
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Open the drinks only maintain restaurent rules and regulations
                below
              </p>
              <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Quickly generate bricks-and-clicks
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Interactively cultivate visionary platforms
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Energistically envisioneer resource
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
