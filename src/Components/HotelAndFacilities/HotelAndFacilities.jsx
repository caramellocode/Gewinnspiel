import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import './HotelAndFacilities.css'; // Stelle sicher, dass du die CSS-Datei importierst

const HotelAndFacilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const facilitiesData = [
    {
      img: "/images/home-1/aaautomaten.png",
      title: "Spielautomaten",
      description: "Spielautomaten Vielfalt: Spass und Unterhaltung an 306 Spielautomaten garantiert!",
      link: "/spielautomaten"
    },
    {
      img: "/images/home-1/pppoker.png",
      title: "Poker",
      description: "Nervenkitzel: Das beliebteste Kartenspiel der Welt.",
      link: "/poker"
    },
    {
      img: "/images/home-1/rroulett.png",
      title: "Roulette",
      description: "Pures Vergnügen: Eine Kugel, ein Kessel mit 37 Zahlen und ein Tisch, auf dem Sie Ihre Jetons auf Zahlen oder Zahlenkombinationen setzen.",
      link: "/american-roulette"
    },
    {
      img: "/images/home-1/bbblackjack.png",
      title: "Black Jack",
      description: "Spielklassiker: Ein Kartenspiel bei dem das Ziel ist, so nah wie möglich an 21 heran zu kommen.",
      link: "/blackjack"
    },
    {
      img: "/images/home-1/texass.png",
      title: "Texas Hold'EM",
      description: "Auf ein gutes Blatt: Ein strategisches Kartenspiel bei dem Sie gegen die die Bank ein besseres Blatt haben sollten.",
      link: "/texas-holdem"
    }
  ];

  return (
    <section className="bg-lightBlack z-[1] relative">
      <div className="py-[110px] bg-no-repeat bg-top bg-opacity-[0.07] relative">
        <div className="container mx-auto px-3">
          <div
            className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
              <hr className="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b]" />
              <img
                src="/images/home-1/section-shape1.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b]" />
            </div>
            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond uppercase">
              GRAND GAMES -   <br />GRAND EMOTIONS
            </h1>
            <p className="font-Lora leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              Das Grand Casino Liechtenstein bietet seinen Gästen neben spannenden Live-Games 
              wie American Roulette,<br /> Black Jack, Ultimate Texas Hold’em und Poker
              auch 306 moderne Spielautomaten. 
            </p>
          </div>
          {/* HOTEL’S FACILITIES content */}
          <div
            className="flex items-center justify-center gap-5 lg:gap-14 pt-[60px] pb-[110px] flex-wrap"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {facilitiesData.map((data, i) => (
              <div
                key={i}
                className="facility-card"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={data.img} alt={data.title} />
                {hoveredIndex !== i && <h4>{data.title}</h4>}
                {hoveredIndex === i && (
                  <div className="facility-hover">
                    <p>{data.description}</p>
                    <HiOutlineArrowNarrowRight 
                      className="arrow"
                      onClick={() => navigate(data.link)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelAndFacilities;






