import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Deepstack.css";

const Deepstack = () => {
  const items = [
    {
      img: "./images/home-1/winter5.jpg",
      headline: "📅 12.12. - 15.12.2024",
      text: "💰 Buy-In: CHF 180 + 20 Fee\n🃏 Stack: 40'000 Chips\n⏱ Level Time: 30 Minuten\n♻️ Re-Entry & Late Reg bis Level 8",
    },
  ];

  return (
    <div className="gallery-container">
      {/* Hintergrundvideo */}
      <video className="background-video" autoPlay loop muted>
        <source src="/images/home-1/" type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>

      {/* Zentriertes Bild im Sliderbereich */}
      <div className="slider-image-container">
        <img src="/images/home-1/headline.png" alt="Headline" className="slider-image" />
        <img src="/images/home-1/GTD.png" alt="GTD" className="slider-image" />
      </div>

      <header className="header">
        <h1>12. - 15. Dezember</h1>
        <p>
          CHF 100'000 GTD – Sei dabei beim Poker-Highlight des Jahres im Grand
          Casino Liechtenstein!
        </p>
        <p>
          Verpasse nicht die Chance, dein Können unter Beweis zu stellen und um
          den garantierten Preispool von CHF 100'000 zu kämpfen! 🏆
        </p>
      </header>

      {/* SponsoringComponent21 einfügen */}


      {/* Inhalt-Abschnitt */}
      <div className="content-section" style={{ display: "flex", gap: "20px", alignItems: "center", padding: "20px" }}>
        <div className="content-item" style={{ flex: 1 }}>
          <img src={items[0].img} alt="Winter Deepstack" className="content-img" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
        <div className="content-text" style={{ flex: 1, fontSize: "1.2em" }}>
          <h2>{items[0].headline}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{items[0].text}</p>
          <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px", fontSize: "1.2em" }}>
            <li>Day 1A: 12.12., 17:00</li>
            <li>Day 1B: 13.12., 12:00</li>
            <li>Day 1C: 13.12., 17:00</li>
            <li>Day 1D: 14.12., 12:00</li>
            <li>Day 1E: 14.12., 17:00</li>
            <li>Day 1F (Turbo): 15.12., 11:30</li>
            <li>Day 2: 15.12., 16:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Deepstack;
