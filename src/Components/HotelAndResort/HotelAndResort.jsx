import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./hotel.css";

const HotelAndResort = () => {
  const [, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
    created: () => {},
  });

  return (
    <section className="dark:bg-mediumBlack py-20 xl:py-[120px]">
      <div
        className="container mx-auto px-3 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="lg:flex gap-10 items-center justify-between">
          <div className="w-full lg:w-1/2 " ref={sliderRef}>
            {/* Slider-Elemente */}
            <div className="keen-slider__slide number-slide1 overflow-hidden">
              <img
                src="/images/home-3/b2.jpg"
                className="w-full"
                alt="Hotel-slider-image"
              />
            </div>
          </div>
          {/* Textbereich */}
          <div className="font-Garamond mt-5 w-full lg:w-1/2">
            <img
              className="aactioncoin"
              src="/images/home-1/action-img.png"
              alt=""
            />
            <h5 className="text-base text-khaki leading-[26px] font-medium">
              GRAND CASINO LIECHTENSTEIN
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-[21px] xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white ">
              FEEL GRAND - Herzlich Willkommen
            </h1>
            <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
              
              <span style={{ height: '30px', width: '1px', display: 'inline-block', backgroundColor: '#ddd', verticalAlign: 'middle', marginRight: '10px' }}></span> <br />
              Mit 7000 m² ist das Grand Casino in Bendern das grösste Casino des
              Fürstentums. Ganz nach unserem Motto «Feel Grand» vereinen wir
              Spiel, Stil, Exklusivität und Genuss wie kein anderes Casino im
              Fürstentum! Spielvergnügen der Extraklasse in einer stilvollen und
              exklusiven Atmosphäre. Das Casino bietet eine breite Palette an
              Spielen und Unterhaltungsmöglichkeiten für jeden Geschmack.
            </p>{" "}
            <br />
            <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-khaki dark:text-lightGray font-normal leading-[26px]">
              ÖFFNUNGSZEITEN
            </p>{" "}
            <table className="text-sm sm:text-base leading-10 3xl:leading-[50px] text-lightBlack dark:text-white font-medium font-Lora">
              <tbody>
                <tr>
                  <td className="text-lightBlack dark:text-white" style={{ fontSize: "18px", lineHeight: "1.3" }}>
                    CASINO:
                  </td>
                  <td className="pl-4" style={{ fontWeight: 300, whiteSpace: 'nowrap' }}>
                    täglich 11:00 – 05:00 Uhr
                  </td>
                </tr>
                <tr>
                <td className="text-lightBlack dark:text-white" style={{ fontSize: "18px", lineHeight: "1.3" }}>
                POKER:
                  </td>
                  <td className="pl-4" style={{ whiteSpace: 'nowrap' }}>
                    täglich 17:00 – 05:00 Uhr
                  </td>
                </tr>
                <tr>
                <td className="text-lightBlack dark:text-white" style={{ fontSize: "18px", lineHeight: "1.3" }}>
                LIVE-GAME:
                  </td>
                  <td className="pl-4" style={{ fontWeight: 100, whiteSpace: 'nowrap' }}>
                    täglich 15.00 – 05:00 Uhr
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelAndResort;


