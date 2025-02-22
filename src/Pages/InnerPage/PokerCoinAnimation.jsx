import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function PokerCoinAnimation() {
  const [animate, setAnimate] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);  // Referenz für das Audio-Element

  const handleClick = () => {
    setAnimate(true);
    audioRef.current.play();  // Starte die Audiowiedergabe
    setTimeout(() => {
      setAnimate(false);
      setShowPopup(true);  // Öffne das Popup nach der Animation
    }, 5000); // Zeit sollte der Dauer der längsten Coin-Animation entsprechen
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/our_team');  // Optionale Weiterleitung nach Schließen des Popups
    audioRef.current.pause();  // Pausiere das Audio, wenn das Popup geschlossen wird
    audioRef.current.currentTime = 0;  // Setze das Audio zurück zum Anfang
  };

  return (
    <>
      <button onClick={handleClick}>AKTUELLE JACKPOTTS</button>
      <audio ref={audioRef} src="/images/home-1/coool.mov" preload="auto"></audio>
      {animate && [...Array(100)].map((_, i) => {
        const xStart = Math.random() * 100;
        return (
          <div key={i} className="coin" style={{
            left: `${xStart}vw`,
            animation: `rainFall 5s linear ${i * 0.05}s infinite`
          }}></div>
        );
      })}

      {showPopup && (
        <div className="popup">
          <button onClick={closePopup}>Close</button>
          <div className="photos">
            <img src="/images/home-1/jack1.png" alt="Photo 1" />
            <img src="/images/home-1/jack2.png" alt="Photo 2" />
            <button className="btn-primary">Alle Jackpots</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PokerCoinAnimation;





