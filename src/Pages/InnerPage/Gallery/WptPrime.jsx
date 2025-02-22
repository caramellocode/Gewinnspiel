import React, { useEffect } from "react";
import "./Wptprime.css";
import gsap from "gsap";
import Countdown2 from "./Countdown2";

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

const WptPrime = () => {
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

    const partnerHeadlines = document.querySelectorAll(
      ".responsive-section h1"
    );
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

    startStarAnimation();
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

  const startStarAnimation = () => {
    const summe = document.querySelector(".summe");
    const star = document.querySelector(".star");

    if (!summe || !star) return;

    const summeRect = summe.getBoundingClientRect();

    const positions = [
      {
        top:
          summeRect.top +
          window.scrollY +
          (summeRect.height - star.clientHeight) / 2,
        left:
          summeRect.left +
          window.scrollX +
          (summeRect.width - star.clientWidth) / 2,
      }, // Mitte
      {
        top:
          summeRect.top +
          window.scrollY +
          (summeRect.height - star.clientHeight) / 2,
        left: summeRect.left + window.scrollX,
      }, // Links
      {
        top:
          summeRect.top +
          window.scrollY +
          (summeRect.height - star.clientHeight) / 2,
        left: summeRect.right + window.scrollX - star.clientWidth,
      }, // Rechts
    ];

    const animateStar = () => {
      const position = positions[Math.floor(Math.random() * positions.length)];
      gsap.set(star, { ...position, opacity: 0 });
      gsap.to(star, {
        opacity: 1,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onComplete: animateStar,
      });
    };

    animateStar();
  };

  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = url.substring(url.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const redirectToMap = () => {
    window.location.href =
      "https://www.google.ch/maps/place/Grand+Casino+Liechtenstein/@47.2051938,9.5000179,17z/data=!3m1!4b1!4m6!3m5!1s0x479b31ece47339b5:0xcb421d08c4507b71!8m2!3d47.2051938!4d9.5025982!16s%2Fg%2F11fnxkrjkk?hl=de&entry=ttu";
  };

  const cards = [
    {
      img: "/images/home-1/motel.jpg",
      text: "Standort und Hotels",
      button: "Alle Hotels",
      link: "./lokale-hotels",
    },
    {
      img: "/images/home-1/epmv1.png",
      text: "Turnierplan",
      button: "Download",
      download: true,
      link: "/images/home-1/tepm.pdf",
    },
    {
      img: "/images/home-1/principality-of-liechtenstein-gca0532c6c_1920-1024x768.jpg",
      text: "Lokale Aktivitäten",
      button: "Mehr erfahren",
      link: "./lokales",
    },
  ];

  const images = [
    "./images/home-1/DSC04474.jpg",
    "./images/home-1/DSC04477.jpg",
    "./images/home-1/DSC04522.jpg",
    "./images/home-1/DSC04489.jpg",
    "./images/home-1/DSC04491.jpg",
    "./images/home-1/DSC04495.jpg",
    "./images/home-1/DSC04499.jpg",
    "./images/home-1/DSC04515.jpg",
    "./images/home-1/DSC04522.jpg",
    "./images/home-1/DSC04553.jpg",
    "./images/home-1/DSC04695.jpg",
    "./images/home-1/DSC04702.jpg",
    "./images/home-1/DSC04707.jpg",
    "./images/home-1/DSC04708.jpg",
    "./images/home-1/DSC04712.jpg",
    "./images/home-1/DSC04747.jpg",
    "./images/home-1/DSC04761.jpg",
    "./images/home-1/DSC04703.jpg",
  ];

  const tooltips = [
    "grid-area: hero",
    "grid-area: big",
    "grid-area: medium",
    "grid-area: medium",
    "grid-area: small",
    "grid-area: small",
    "grid-area: small",
    "grid-area: small",
    "grid-area: small",
    "grid-area: small",
    "grid-area: small",
    "grid-area: small",
  ];

  return (
    <div className="gallery-container bg-white">
      <header className="header">
        <div className="container">
          <img src="/images/home-1/epmlogo.png" alt="" />
          <h1>18.11. - 25.11. 2024</h1>
          <Countdown2 />
          <br />
          {/* Countdown-Komponente hier eingefügt */}
          <p>Mit einem Startstack von 60.000 Chips und Blinds von 40'/50'/60' hast du die Chance, dein Können unter Beweis zu stellen <br /> und um den riesigen Preispool zu spielen!</p>
          <div className="relative-container">
            <img className="summe" src="/images/home-1/1m.png" alt="Summe" />{" "}
            {/* Summe PNG bleibt */}
            <img
              className="star"
              src="/images/home-1/star.png"
              alt="Star"
            />{" "}
            {/* Bild mit blinkendem Effekt */}
          </div>
        </div>
      </header>
      <div className="responsive-section">
        <img src="/images/home-1/epmflyer.jpg" alt="" />
        <div className="container">
          <h1 style={{ color: "white" }}>
            {" "}
            Euro Poker Million im Grand Casino Liechtenstein!
          </h1>
          <span style={{ color: "white" }}>
            Vom 18. bis 25. November 2024 erwartet euch eines der spannendsten
            Pokerturniere des Jahres! 🔥 <br />💰 CHF 1.000.000 garantiert! 🏆 CHF
            250.000 für den Gewinner! <br />💸 Buy-in: CHF 600 <br />
            <button
              className="card-button"
              onClick={() =>
                downloadImage("/images/home-1/epmflyer.jpg")
              }
            >
              Flyer downloaden
            </button>{" "}
            <br />
            <button className="card-button" onClick={redirectToMap}>
              Route/Navigation
            </button>
          </span>
        </div>
      </div>
      <div className="responsive-section">
        <img src="/images/home-1/eee.jpg" alt="" />
        <div className="container">
          <h1 style={{ color: "white" }}>Unsere Hotel Partner</h1>
          <span style={{ color: "white" }}>
            Sichern Sie sich{" "}
            <span
              className="discount"
              style={{ display: "inline-block", color: "red" }}
            >
              20%
            </span>{" "}
            Rabatt bei unseren Hotelpartnern und geniessen Sie das EPM Event bei
            uns in Bendern. <br />
            <button
              className="card-button"
              onClick={() =>
                downloadImage("/images/home-1/eee.jpg")
              }
            >
              Flyer downloaden
            </button>
          </span>
        </div>
      </div>
      <div className="card-section">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={`Card ${index + 1}`} />
            <div className="card-content">
              <p>{card.text}</p>
              {card.download ? (
                <button
                  className="card-button"
                  onClick={() => downloadImage(card.link)}
                >
                  {card.button}
                </button>
              ) : (
                <a href={card.link} className="card-button">
                  {card.button}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="container"></div>
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
            Impressionen <br /> vom Pokerroom
          </h1>
          <span style={{ color: "white" }}>
            Tauchen Sie ein in die Atmosphäre und erleben Sie die spannenden
            Momente aus unserem Pokerroom.
          </span>
        </div>
      </div>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="item" key={index} tabIndex={index + 1}>
            <div className="box">
              <img src={src} alt={`Bild ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WptPrime;
