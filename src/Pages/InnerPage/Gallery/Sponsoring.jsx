import React, { useEffect, lazy, Suspense } from "react";
import "./Sponsoring.css";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Lazy load images and components
const LazyImage = ({ src, alt, style }) => (
  <img src={src} alt={alt} style={style} loading="lazy" />
);

const Sponsoring = () => {
  useEffect(() => {
    const spanText = (text) => {
      const string = text.innerText;
      let spaned = "";
      for (let i = 0; i < string.length; i++) {
        spaned += string[i] === " " ? string[i] : `<span>${string[i]}</span>`;
      }
      text.innerHTML = spaned;
    };

    const headline = document.querySelector("h1");
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
        }
      );
    }
  }, []);

  const redirectToMap = () => {
    window.location.href = "https://www.google.ch/maps/place/Grand+Casino+Liechtenstein";
  };

  return (
    <div className="gallery-container bg-white">
      <Suspense fallback={<div>Loading Swiper...</div>}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <LazyImage
              src="/images/home-2/csm_SCRATeam2_6eb5783af9.jpg"
              alt="Team 2"
              style={{ width: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyImage
              src="/images/inner/csm_GC2_3f135f253a.jpg"
              alt="GC Image"
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
      </Suspense>

      <div
        className="responsive-section"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <LazyImage
          src="/images/home-1/csm_1-IMG_7862_aacfc8cc11.jpg"
          alt="SCR Altach Damen"
          style={{ width: "50%" }}
        />
        <div style={{ width: "50%" }}>
          <h1 style={{ color: "white" }}>SCR Altach Damen</h1>
          <p style={{ color: "white" }}>
            Grand Casino Liechtenstein neuer Hosensponsor des SCR Altach <br />
            Das Grand Casino ist mit seinem Logo ab sofort auf der Hosen-Rückseite unserer Herren- und Frauenbundesligamannschaft vertreten.
          </p>
          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <LazyImage
              src="/images/home-1/puulins.png"
              alt="Left Icon"
              style={{ marginRight: "10px" }}
            />
            <button className="card-button" onClick={redirectToMap}>
              Mehr erfahren
            </button>
            <LazyImage
              src="/images/inner/mia.png"
              alt="Right Icon"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>

      <div
        className="responsive-section"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <LazyImage
          src="/images/inner/manschaft1.jpg"
          alt="SCR Altach Herren"
          style={{ width: "50%" }}
        />
        <div style={{ width: "50%" }}>
          <h1 style={{ color: "white" }}>SCR Altach Herren</h1>
          <p style={{ color: "white" }}>
            Grand Casino Liechtenstein neuer Hosensponsor des SCR Altach Herren <br />
            Das Grand Casino ist mit seinem Logo ab sofort auf der Hosen-Rückseite unserer Herren- und Frauenbundesligamannschaft vertreten.
          </p>
          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <LazyImage
              src="/images/inner/man1.png"
              alt="Left Icon"
              style={{ height: "500px", marginLeft: "10px" }}
            />
            <button className="card-button" onClick={redirectToMap}>
              Mehr erfahren
            </button>
            <LazyImage
              src="/images/inner/man2.png"
              alt="Right Icon"
              style={{ height: "500px", marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsoring;
