/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const handleEmailClick = () => {
  window.location.href =
    "mailto:grandcasino@gcli.li?subject=Bestellung&body=Ich%20möchte%20eine%20Bestellung%20aufgeben.";
};

const handleRouteClick = () => {
  window.open("https://www.google.com/maps/search/?api=1&query=47.166,9.555"); // Koordinaten für Liechtenstein
};

const handleCallClick = () => {
  window.location.href = "tel:+423 222 77 37";
};

const AmericanRoulette = () => {
  const [routeSelected, setRouteSelected] = useState("");
  const sliderData = [
    {
      id: 1,
      img: "/images/home-1/Roulette_Slider.JPG",
      title: "",
      route: "spielautomaten",
      pdfLink: "https://gcli.li/American-Roulette.pdf"
    }
  ];

  const rouletteData = [];

  return (
    <div>
      {routeSelected === "" ? (
        <>
          {/* spiele slider section */}
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
            {sliderData.map((slide, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    backgroundImage: `url(${slide.img})`,
                  }}
                  className={`w-full h-[350px] md:h-[550px] bg-blend-multiply xl:h-[750px] bg-[rgba(30,30,30,0.4)] bg-opacity-40 flex flex-col gap-8 items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0`}
                >
                  <h1
                    style={{
                      textShadow: "0.1em 0.01em 0.1em #000",
                    }}
                    className="text-5xl font-bold text-[#DEBF64]"
                  >
                    {slide.title}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full bg-lightBlack py-16">
            <div className="container mx-auto px-5">
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
                <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond  uppercase">
                  American Roulette
                </h1>
                <p className="font-Lora leading-[26px] text-lightGray font-normal text-sm sm:text-base">
                  Pures Vergnügen bietet Ihnen das Spiel an einem unserer
                  Roulette-Tische. Eine kleine Kugel, ein Kessel mit den Zahlen
                  von 0 bis 36 und ein Tisch, auf dem Sie mit Ihren Jetons oder
                  Chips auf einzelne dieser Zahlen bzw. auf Zahlenkombinationen
                  setzen, so einfach ist Roulette. Als Spieler macht man
                  tatsächlich nicht viel selbst ausser den Wetteinsatz auf die
                  gewählte Zahl zu setzen, wenn der Croupier das Spiel mit
                  «Place your bets, please!», frei gibt. Sie platzieren Ihre
                  Jetons am Spielfeld auf die von Ihnen gewünschten
                  Gewinnchancen. Auf Wunsch setzt der Croupier gerne für Sie.
                  Dann heisst es nur noch Daumen drücken und mitfiebern, wenn es
                  heisst «No more bets!». Tatsächlich geht am Roulette-Tisch
                  recht viel, denn Roulette ist in der Tat eine pure
                  Glückssache. Es gibt aber Statistiken, welche besagen, welche
                  Zahlenkombinationen am häufigsten fallen. Beim Roulette haben
                  Sie die Möglichkeit nach jeder Runde auszusteigen. Es ist das
                  perfekte Spiel für Menschen, die gerne am Casino-Spass und der
                  Aufregung teilhaben wollen, ohne sich über Regeln Gedanken zu
                  machen.
                </p>
                {sliderData[0].pdfLink && (
                  <a
                    href={sliderData[0].pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-[#c19c67] w-fit flex mx-auto gap-3 items-center justify-center px-4 py-3 text-2xl font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#c19c67"
                      className="w-10 h-10"
                    >
                      <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                    </svg>
                    Spielerklärung
                  </a>
                )}
                <div className="flex justify-center space-x-4 mt-5">
                  <div className="flex justify-center space-x-4 mt-5">
                    <Link to="/spiele">
                      <button className="btn-primary1 bg-khaki">
                        Zurück
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
              <div className="pt-16">
                <div className="flex gap-7 justify-start flex-wrap">
                  {rouletteData.map((roulet, i) => (
                    <button
                      key={i}
                      onClick={() => setRouteSelected(roulet.title)}
                      className="uppercase w-[300px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 text-base font-Garamond font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack text-white"
                    >
                      {roulet.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {rouletteData.map(
            (data, i) =>
              data.title === routeSelected && (
                <div key={i}>
                  <div className="w-full">
                    <img
                      className="w-full h-[600px] object-cover"
                      src={data.img}
                      alt="casino"
                    />
                  </div>
                  <div className="w-full bg-lightBlack py-16">
                    <div className="container mx-auto px-5">
                      <h1 className="text-center text-5xl font-semibold leading-[1.3] text-[#DEBF64] capitalize pb-5">
                        {data.title}
                      </h1>
                      {data.paragraph.map((para, i) => (
                        <p
                          className="text-center py-1 text-white text-lg"
                          key={i}
                        >
                          {para}
                        </p>
                      ))}
                      {data.pdfLink && (
                        <Link
                          to={data.pdfLink}
                          style={{
                            marginTop: '1.5rem',
                            color: 'white',
                            backgroundColor: '#DEBF64', // gleiche Farbe wie die Buttons
                            width: 'fit-content',
                            display: 'flex',
                            margin: '0 auto',
                            gap: '0.75rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.75rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10"
                          >
                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                          </svg>
                          Spielerkddlärung
                        </Link>
                      )}
                      <div className="pt-16">
                        <div className="flex gap-7 justify-start flex-wrap">
                          {rouletteData.map((roulet, i) => (
                            <button
                              key={i}
                              onClick={() => setRouteSelected(roulet.title)}
                              className="uppercase w-[300px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 text-base font-Garamond font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack text-white"
                            >
                              {roulet.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </>
      )}
    </div>
  );
};

export default AmericanRoulette;


