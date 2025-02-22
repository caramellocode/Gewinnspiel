import React, { useState, lazy, Suspense } from "react";
import { BsPlay } from "react-icons/bs";
import "fslightbox-react";

const FsLightbox = lazy(() => import("fslightbox-react"));

const Action = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="dark:bg-mediumBlack dark:z-[-1]">
      <section className="container mx-auto px-3 mt-[-90px] dark:z-[1]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
          <div
            className="bg-[#f8f6f3] dark:bg-normalBlack space-y-[14px] flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5 className="text-base text-khaki leading-[26px] "><br /><br />NEU</h5>
            <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white">
              GRAND VIEW - Mit der Drohne durchs Grand Casino <br /><br />
            </h1>
            <p className="text-sm sm:text-base font-Lora relative text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
              Erleben Sie das Grand Casino Liechtenstein aus einer neuen Perspektive mit unserem exklusiven Drohnenvideo. Die spektakulären Innenaufnahmen zeigen das Grand Casino, die Roof Top Bar «Floor Four» und das Restaurant Alpspitz aus einer einzigartigen Vogelperspektive.
            </p>
            <div
              className="image-container"
              style={{
                position: "relative",
                overflow: "hidden",
                height: "190px",
                width: "100%",
              }}
            >
              <img
                className="ciip2"
                src="/images/home-1/drohhne.png"
                alt="Drohne"
                style={{
                  position: "absolute",
                  right: "50px",
                  bottom: "20px",
                  animation: "float 3s ease-in-out infinite",
                  zIndex: 1000,
                }}
              />
            </div>
          </div>
          <div
            className="flex-1 h-[100%] w-full relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <video
              className="h-full w-full md:h-[80%] lg:h-full 2xl:h-[99%] object-cover"
              src="/images/home-1/dronenvideo.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <div
              className="w-[70px] h-[70px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer z-[1]"
              onClick={() => setToggler(!toggler)}
            >
              <span className="w-[100px] h-[100px] grid items-center justify-center rounded-full border border-whiteSmoke m-[15px]">
                <p
                  className="text-base leading-[38px] text-lightBlack font-Garamond font-medium bg-whiteSmoke w-[70px] h-[70px] rounded-full grid items-center justify-center cursor-pointer"
                  onClick={() => setToggler(!toggler)}
                >
                  Vollbild
                </p>
              </span>
            </div>
          </div>
          <Suspense fallback={<div>Loading Video...</div>}>
            <FsLightbox toggler={toggler} sources={["/images/home-1/dronenvideo.mp4"]} type="video" />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Action;
