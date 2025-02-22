import React from "react";
import "./FloatingButton.css";

const FloatingButton = () => {
  const buttons = [
    {
      title: "",
      url: "https://live.gcli.li",
      bgImage: "/images/home-1/Piktogramme-Poker-03.png",
    },
  ];
  return (
    <div className="floating-button-container">
      {buttons.map((button, index) => (
        <div
          key={index}
          className="floating-button-content"
          style={{ backgroundImage: `url(${button.bgImage})` }}
          onClick={() => (window.location.href = button.url)}
        >
          <span className="inner-circle">
            <p className="button-title">{button.title}</p>
          </span>
          <div className="star-container">
            {Array.from({ length: 0 }).map((_, i) => {
              const randomTop = Math.random() * 100; // Zufällige Position innerhalb von 100% Höhe
              const randomLeft = Math.random() * 100; // Zufällige Position innerhalb von 100% Breite
              return (
                <div
                  key={i}
                  className="star-icon"
                  style={{
                    top: `${randomTop}%`,
                    left: `${randomLeft}%`,
                    animationDelay: `${i * 0.5}s`, // Verzögerung für jeden Stern
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingButton;
