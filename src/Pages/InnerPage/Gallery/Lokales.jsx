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

const Lokales = () => {
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
      img: "./images/home-1/lokal1.jpg",
      headline: "Top-12-Erlebnisse in Liechtenstein",
      text: "Im Fürstentum Liechtenstein gibt es zahlreiche Sehenswürdigkeiten und Naturschönheiten zu entdecken. Wir haben für Sie eine Auswahl im Tal- und Berggebiet zusammengestellt.",
      button: "Mehr erfahren",
      link: "https://tourismus.li/erlebnisse/top-11-erlebnisse-in-liechtenstein/",
    },
    {
      img: "./images/home-1/lokal2.jpg",
      headline: "Kunst und Kultur",
      text: "Die Kostbarkeiten der Schatzkammer bestaunen und die Werke des Kunstmuseums Liechtenstein bewundern: Das – und vieles mehr – sind die kulturellen Highlights im Fürstentum Liechtenstein. In keinem anderen Staat werden Sie ein verhältnismässig so grosses Angebot an Kunst und Kultur finden",
      button: "Mehr erfahren",
      link: "https://tourismus.li/erlebnisse/kunst-und-kultur/",
    },
    {
      img: "./images/home-1/lokal3.jpg",
      headline: "Kulinarik und Regionalität",
      text: "Das Fürstentum Liechtenstein bietet eine grosse Auswahl an Angeboten, die dem kulinarisch interessierten Gast nichts zu wünschen übrig lassen. Zudem gibt es, neben dem Weinberg des Fürsten von Liechtenstein, viele kleine Weingüter vom Eschnerberg, über Schaan, Vaduz und Triesen bis zum Burghügel Gutenberg, die erstklassige liechtensteinische Weine produzieren.",
      button: "Mehr erfahren",
      link: "https://tourismus.li/erlebnisse/kulinarik-und-regionalitaet/",
    },
    {
      img: "./images/home-1/lokal4.jpg",
      headline: "Wandern",
      text: "Das Wandern gehört im Sommer und Herbst zu den beliebtesten Hobbys der Liechtensteinerinnen und Liechtensteiner, aber auch die Gäste in unserem Land wissen das Wanderwegnetz mit über 400 Kilometern Wanderwege zu schätzen.",
      button: "Mehr erfahren",
      link: "https://tourismus.li/erlebnisse/sommerurlaub-in-liechtenstein/wandern/",
    },
    {
      img: "./images/home-1/lokal5.jpg",
      headline: "Sommererlebnisse",
      text: "Klettern im Klettergarten, fischen, schwimmen oder Golf spielen und Gleitschirmfliegen. Es ist für den Liechtenstein Besucher sicher etwas Passendes dabei. Das Fürstentum Liechtenstein bietet Ihnen eine Vielzahl an Ausflugsmöglichkeiten und Erlebnissen im Sommer.",
      button: "Mehr erfahren",
      link: "https://tourismus.li/erlebnisse/sommerurlaub-in-liechtenstein/sommererlebnisse/",
    },
    {
      img: "./images/home-1/lokal6.jpg",
      headline: "Radfahren & Mountainbike",
      text: "Entdecken Sie Liechtenstein mit dem E-Bike, Mountainbike und dem Fahrrad. Es erwarten Sie abwechslungsreiche Strecken im Tal- und Berggebiet. Die höchsten Ziele liegen auf 2100 Meter Höhe. Das Talgebiet bietet für Genussradfahrer idyllische Routen durch das ganze Land.",
      button: "Mehr erfahren",
      link: "https://tourismus.li/erlebnisse/sommerurlaub-in-liechtenstein/radfahren-mountainbiken/",
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
          <h1>GRAND FEELINGS<br />LOKALE AKTIVITÄTEN</h1>
        </div>
      </header>

      <div className="card-section">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={`Card ${index + 1}`} />
            <div className="card-content">
              <h2>{card.headline}</h2>
              <p>{card.text}</p>
              <a href={card.link} className="card-button pt-6">{card.button}</a>
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
          Im Fürstentum Liechtenstein gibt es zahlreiche Sehenswürdigkeiten und Naturschönheiten zu entdecken.
          </h1>
          <span style={{ color: "white" }}>
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lokales;
