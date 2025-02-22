import React from 'react';
import { Link } from "react-router-dom";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { HiArrowLongRight } from "react-icons/hi2";
import PokerCoinAnimation from "./PokerCoinAnimation";
import './PokerCoinAnimation.css';



const Services = () => {
  return (
    <section>
      <BreadCrumb title="services" />
      <div className="dark:bg-mediumBlack ">
        <section className="Container py-[120px] md:py-0 md:pb-[120px] lg:py-[120px]">
          <div
            className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="md:w-[450px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]">
                FACILITIES
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
                ENJOY COMPLETE & BEST QUALITY FACILITIES
              </h1>
            </div>
            <div className="mt-5 md:mt-0">
              <PokerCoinAnimation /> {/* PokerCoinAnimation Komponente hier eingebunden */}
            </div>
          </div>
          {/* facilities container */}
          <div className="">
            {/* facilities section und weitere Inhalte wie bereits definiert */}
          </div>
          <PokerCoinAnimation /> {/* PokerCoinAnimation Komponente hier eingebunden */}

        </section>
      </div>
    </section>
  );
};

export default Services;
