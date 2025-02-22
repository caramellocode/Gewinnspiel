import { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  const [toggler, setToggler] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth > 900) {
        containerRef.current.style.width = "85%";
      } else {
        containerRef.current.style.width = "";
      }
    };

    updateWidth(); // Initial call
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <section
      className="dark:bg-lightBlack 2xl:py-[120px]"
      style={{ paddingTop: "5rem" }}
    >
      <div className="Container flex flex-col md:flex-row items-center ">
        {/* WelcomeSection img */}
        <div
          className=" md:w-[98%] lg:w-[96%] 2xl:w-[80%] px-[20px] lg:pl-[20px] 2xl:px-[50px] relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/images/home-1/floortop.png"
            alt=""
            className=" h-full object-cover "
          />
        </div>
        
        {/* WelcomeSection text*/}

        <div ref={containerRef} className="font-Garamond mt-5 w-full lg:w-1/2">
          <h5
            className="text-base text-khaki leading-[26px] font-medium"
            style={{ paddingTop: "15px" }}
          ></h5>
          <h1 className="text-[22px] sm:text-2xl md:text-[21px] xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-khaki dark:text-white  my-4">
            HERZLICH WILLKOMMEN{" "}
          </h1>
          <h1 className="text-[22px] sm:text-2xl md:text-[21px] xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white  my-4">
            GRAND COCKTAILS & CIGARS{" "}
          </h1>
          <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
            Die Rooftop Bar «Floor Four» im 4. Stock des Grand Casino
            Liechtenstein ist im eleganten Stil eines englischen Gentlemen’s
            Clubs eingerichtet. <br />
            Unser exklusives Sortiment an Whisky-, Gin-, Rum- und Zigarrensorten
            lässt jedes Geniesserherz höherschlagen.
          </p>{" "}
          <br />
          <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-khaki dark:text-lightGray font-normal leading-[26px]">
            ÖFFNUNGSZEITEN
          </p>{" "}
          <div className="text-sm sm:text-base leading-10 3xl:leading-[50px] text-lightBlack dark:text-white font-medium font-Lora">
            <div>
              <h1
                className="inline text-lightBlack dark:text-white  my-4"
                style={{ fontSize: "18px", lineHeight: "1.3" }}
              >
                Flour Four:
              </h1>{" "}
              <b className="inline" style={{ fontWeight: 100 }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Freitag
                - Samstag 18:00 - 03:00 Uhr
              </b>
            </div>
            

            <div></div>

            <div></div>
          </div>
        </div>
      <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
      </div>

    </section>
  );
};

export default WelcomeSection;
