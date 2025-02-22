import React, { lazy, Suspense } from "react";
import "./PokerCoinAnimation.css";

// Lazy load BreadCrumb component
const BreadCrumb = lazy(() => import("../../BreadCrumb/jobsbreadcrumb"));

const Jobs = () => {
  return (
    <div className="dark:bg-mediumBlack">
      <Suspense fallback={<div>Loading Breadcrumb...</div>}>
        <BreadCrumb title="Jobs" />
      </Suspense>

      <div className="dark:bg-normalBlack py-20 2xl:py-[120px]">
        <div className="container mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond uppercase">
            Aktuell sind keine offenen Stellen verfügbar. <br /> Vielen Dank für Ihr Interesse! <br />
          </h1>
          {/* Placeholder for future job descriptions or iframe */}
          <p className="font-Lora leading-7 lg:leading-[26px] text-lightGray font-normal text-sm sm:text-base mb-10">
            {/* Additional information or links can be added here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
