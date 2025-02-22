import React, { useEffect } from "react";
import "./Lokales.css";
import gsap from "gsap";

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

const LokaleHotels = () => {
  useEffect(() => {
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
          onComplete: () => {
            startZoomAnimation();
          },
        }
      );
    }

    const partnerHeadlines = document.querySelectorAll(".responsive-section h1");
    partnerHeadlines.forEach((partnerHeadline) => {
      if (partnerHeadline) {
        spanText(partnerHeadline);

        gsap.fromTo(
          partnerHeadline.querySelectorAll("span"),
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            onComplete: () => {
              startPartnerZoomAnimation();
            },
          }
        );
      }
    });
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

  const startPartnerZoomAnimation = () => {
    const discountText = document.querySelector(".discount");
    if (discountText) {
      gsap.fromTo(
        discountText,
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

  const cards = [
    {
      img: "./images/home-1/b-hotel.jpg",
      headline: "B_Hotel",
      text: "Distanz 0 km Bendern-FL",
      button: "Mehr erfahren",
      link: "https://www.b-smarts.net/bendern/",
    },
    {
      img: "./images/home-1/b-motel.jpg",
      headline: "B_Motel",
      text: "Distanz 4 km Schaan-FL",
      button: "Mehr erfahren",
      link: "https://www.b-smarts.net/schaan/",
    },
    {
      img: "./images/home-1/kloster-22-750-750-p-L-85.jpg",
      headline: "Kloster",
      text: "Distancz 5 km Schaan-FL",
      button: "Mehr erfahren",
      link: "https://www.kloster-schaan.net",
    },
    {
      img: "./images/home-1/img-201901_STA301_M-750-750-p-L-85.jpg",
      headline: "Vaduzer Hof",
      text: "Distanz 8 km Vaduz-FL",
      button: "Mehr erfahren",
      link: "https://www.vaduzerhof.net",
    },
    {
      img: "./images/home-1/img-City-Hotel-Buchs-Zimmer-1-11-750-750-p-L-85.jpg",
      headline: "Flexy Motel",
      text: "Distanz 8 km Buchs-FL",
      button: "Mehr erfahren",
      link: "https://www.flexymotel.net/buchs",
    },
    {
      img: "./images/home-1/b-smart-hotel-widnau[77].jpg",
      headline: "B Hotel Widnau",
      text: "Distanz 10 km Widnau-FL",
      button: "Mehr erfahren",
      link: "https://www.b-smarts.net/widnau/zimmer",
    },
  ];

  return (
    <div className="gallery-container bg-white">
      <header className="header">
        <div className="container">
          <img
            src="/images/home-1/epmlogo.png"
            alt=""
          />
          <h1>Lokale Partner Hotels</h1>
        </div>
      </header>

      <div className="card-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {cards.map((card, index) => (
          <div className="card" key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', width: '300px' }}>
            <img src={card.img} alt={`Card ${index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="card-content" style={{ padding: '15px' }}>
              <h1 style={{ fontSize: '1.5em', margin: '0 0 10px' }}>{card.headline}</h1>
              <p style={{ margin: '0 0 10px' }}>{card.text}</p>
              <a href={card.link} className="card-button" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>{card.button}</a>
            </div>
          </div>
        ))}
      </div>

      <div
        className="responsive-section"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "80%" }}>
          <h1 style={{ color: "white", fontSize: "2em", marginBottom: "20px" }}>
          </h1>
          <span style={{ color: "white" }}></span>
        </div>
      </div>
    </div>
  );
};

export default LokaleHotels;
