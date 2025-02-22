import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import {
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsPlay,
  BsTwitter,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
const About = () => {
  const [setCurrentSlide] = useState(0);
  // const [setLoaded] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // setLoaded(true);
    },
  });

  return (
    <section className="">
      <BreadCrumb title="Impressionen" home={""} />

      {/* about content */}
      <section className="dark:bg-mediumBlack">
        <div className="Container py-20 2xl:py-[120px] sm:overflow-hidden lg:overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* image */}
            <div
              className="flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/ffrr.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>

            {/* text */}
            <div
              className="mt-10 md:mt-0 md:ml-10 lg:ml-[90px] 2xl:ml-[100px] font-Garamond space-y-3 xl:space-y-4 flex-1"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <img className="aactioncoin" src="/images/home-1/aaction.png" alt="Coin" />
              
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                GRAND CASINO LIECHTENSTEIN
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
              HERZLICH WILLKOMMEN              </h1>

              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
              Das Grand Casino Liechtenstein in Bendern verkörpert einen gesellschaftlichen multifunktionalen Treffpunkt mit internationaler Atmosphäre. Auf vier Etagen und 
rund 7.000 m² erwartet Sie neben einem einzigartigen Entertainment-Angebot, ein professionell geführter Casino-, Gastronomie- und Hotelbetrieb.
              </p>

              <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              ÖFFNUNGSZEITEN
              </p>
              <div className="bg-whiteSmoke dark:bg-lightBlack px-[30px] py-5">
                <p className="text-sm sm:text-base leading-10 3xl:leading-[50px] text-lightBlack dark:text-white font-medium font-Lora ">
                  CASINO : 365 Tage im Jahr geöffnet <br />
                  täglich 11:00 – 04:00 Uhr <br />
                  POKER : täglich 17:00 – 04:00 Uhr <br />
                  LIVE-GAME : täglich 15.00 – 04:00 Uhr
                </p>
                <p className="text-sm sm:text-base leading-10  text-lightBlack dark:text-white font-medium font-Lora ">
                </p>
              </div>
            </div>

            {/* text */}
          </div>
        </div>
      </section>
      {/* Hostel Facilities */}
      {/* next --> */}

      {/* best hotel manager */}
      <div className="bg-lightBlack -z-[1] py-20 2xl:py-[120px]">
        <div className="Container ">
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
            <div
              className="flex-1 h-[100%] w-full relative "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="flex-1 h-[100%] w-full relative ">
                <img  className="ciip" src="/images/home-1/drohhne.png" alt="" />
                <img
                  src="/images/home-1/Casino-Liechtenstein.webp"
                  className="h-full w-full md:h-[80%] lg:h-full object-cover"
                  alt=""
                />


                <div
                  className="w-[70px] h-[70px]  text-white absolute top-1/2 md:top-[35%] lg:top-1/2 left-[45%] bg-khaki rounded-full flex items-center justify-center cursor-pointer z-[1] "
                  onClick={() => setToggler(!toggler)}
                >
                  <BsPlay className="w-8 h-8" />
                </div>
                <span className=" top-[47%] md:top-[33%] lg:top-[48%] left-[42%] lg:left-[43.5%] border w-[90px] h-[90px] rounded-full absolute border-white video-animation"></span>
              </div>
              <FsLightbox
                toggler={toggler}
                sources={["https://youtu.be/fFDyoI73viQ?si=GbDzAagjoa_0Nv2x"]}
              />
            </div>
            <div
              className="bg-[#f8f6f3] dark:bg-normalBlack space-y-5 flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h5 className="text-base text-khaki leading-[26px] font-semibold">
                Dronen Video
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
                Fliege mit uns durch das Casino in Liechtenstein
              </h1>
              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              Erleben Sie das Grand Casino Liechtenstein aus einer neuen Perspektive mit unserem exklusiven Drohnenvideo, das spektakuläre Innenaufnahmen aus der Vogelperspektive einfängt.
              </p>
              <p className="text-sm sm:text-base font-Lora italic leading-[26px] underline  text-gray dark:text-lightGray font-normal ">
                
              </p>
              <div className="flex items-center space-x-6 pt-5">
               

                <div className="">
                  <h4 className="text-lg sm:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                    John D. Alexon
                  </h4>
                  <p className="pt-1 text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center font-Lora">
                    <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                    Manger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      
     
      </section>
      

      
       
      
   
  );
};

export default About;
