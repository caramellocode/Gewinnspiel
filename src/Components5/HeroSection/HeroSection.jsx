// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const HeroSection = () => {
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
  }, []);

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
        navigation={true}
        speed="3000"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
      
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/csm1.jpg')] w-full h-[500px] md:h-[700px] xl:h-[750px] bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0"
            data-aos="fade-down"
          >
            <div className="font-Garamond 2xl:w-[720px] text-center">
              <h4 className="text-base mb-4"></h4>
              <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]"></h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]"></h1>
              </div>
              <Link to={"/about"}></Link>
            </div>
            {/* contact info */}
          </div>
        </SwiperSlide>

       
        
      </Swiper>
    </div>
  );
};

export default HeroSection;
