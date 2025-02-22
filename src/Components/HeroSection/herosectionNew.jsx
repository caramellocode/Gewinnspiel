import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const spanText = (text) => {
  const string = text.innerText;
  let spaned = "";
  for (let i = 0; i < string.length; i++) {
    if (string.substring(i, i + 1) === " ")
      spaned += string.substring(i, i + 1);
    else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
  }
  text.innerHTML = spaned;
};

const HeroSectionNew = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = -1;
      videoRef.current.play();
    }
  };

  const handleVideoPlay = () => {
    if (videoRef.current && videoRef.current.playbackRate === -1) {
      videoRef.current.playbackRate = 1;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
      videoElement.addEventListener("play", handleVideoPlay);

      // Attempt to play the video on mount
      playVideo();

      // Clean up event listeners on unmount
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
        videoElement.removeEventListener("play", handleVideoPlay);
      };
    }

    const headline = document.querySelector(".animated-headline");
    if (headline) {
      spanText(headline);

      gsap.fromTo(
        headline.querySelectorAll("span"),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          onComplete: () => {
            startZoomAnimation();
          },
        }
      );
    }
  }, []);

  const startZoomAnimation = () => {
    const amountText = document.querySelector(".amount");
    if (amountText) {
      gsap.fromTo(
        amountText,
        { scale: 1, transformOrigin: "center center" },
        {
          scale: 2,
          duration: 0.5,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        }
      );
    }
  };

  const locationPath = useLocation();

  return (
    <div
      className={`${
        /^\/mobile\//.test(locationPath.pathname) == true
          ? "hidden"
          : locationPath.pathname == "/mobile"
          ? "hidden"
          : "block"
      }`}
    >
      <Swiper
        centeredSlides={true}
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
        {/* slider 1 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/FF_DSC00050.jpg')] w-full h-[500px] md:h-[700px] xl:h-[750px] bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0"
            data-aos="fade-down"
          >
            <div className="font-Garamond 2xl:w-[720px] text-center">
              <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
                <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
                <img
                  src="/images/home-1/fffff.png"
                  alt=""
                  style={{
                    filter:
                      "drop-shadow(2px 2px 1px black) drop-shadow(1px 1px 1px white)",
                  }}
                />
              </div>
              <h4 className="text-base mb-4"></h4>
              <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                
              </div>
              <Link to={"/"}>{/* Weitere Inhalte */}</Link>
            </div>
            <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
              <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +423 222 77 37
            </div>
          </div>
        </SwiperSlide>

        {/* Weitere Slider */}
      </Swiper>
    </div>
  );
};

export default HeroSectionNew;

