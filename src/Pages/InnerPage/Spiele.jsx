/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import HotelAndFacilities from "../../Components/HotelAndFacilities/HotelAndFacilities";

const Spiele = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderData = [
    {
      id: 1,
      img: "/images/home-1/automat1.jpg",
      title: "",
      route: "/spielautomaten",
    },
    {
      id: 2,
      img: "/images/inner/american.jpg",
      title: "",
      route: "american-roulette",
    },
    {
      id: 4,
      img: "/images/inner/blackjack.jpg",
      title: "",
      route: "black-jack",
    },
    {
      id: 5,
      img: "/images/inner/ultimate.jpg",
      title: "",
      route: "ultimate-texas-holdem",
    },
    {
      id: 6,
      img: "/images/inner/poker.jpg",
      title: "",
      route: "poker",
    },
  ];

  return (
    <div>
      {/* Spiele Slider Sektion */}
      <Swiper
        centeredSlides={true}
        navigation={false} // Navigationsbutton deaktiviert
        speed="3000"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderData.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${slide.img})`,
                // height: isMobile ? "350px" : "700px", // 350px Höhe für mobile und 700px Höhe für größere Bildschirme
              }}
              className={`w-full h-[350px] md:h-[700px] bg-blend-multiply bg-[rgba(30,30,30,0.4)] bg-opacity-40 flex flex-col gap-8 items-center bg-cover justify-center text-white relative pb-[20px] lg:pb-20 xl:pb-0`}
            >
              <h1
                style={{
                  textShadow: "0.1em 0.01em 0.1em #000",
                }}
                className="text-5xl font-bold text-[#DEBF64]"
              >
                {slide.title}
              </h1>
              {slide.route === "/spielautomaten" && (
                <Link to={slide.route}></Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full bg-lightBlack py-16">
        <HotelAndFacilities />
      </div>
    </div>
  );
};

export default Spiele;
