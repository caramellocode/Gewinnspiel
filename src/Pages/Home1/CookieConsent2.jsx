import React, { useState, useEffect } from "react";

const CookieConsent2 = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="cookie-consent-popup2">
      <p>
        <strong>
          SPIELSPERREN ZWISCHEN DER SCHWEIZ UND DEM FÜRSTENTUM LIECHTENSTEIN
        </strong>
      </p>
      <p>
        Ab dem 06. Januar 2025 werden Spielsperren zwischen der Schweiz und dem
        Fürstentum Liechtenstein ausgetauscht und gelten in beiden Ländern.
      </p>
      <p>
        Bei Fragen stehen wir Ihnen gerne unter
        sk@gcli.li zur Verfügung.
      </p>
      <button onClick={handleReject}>
        Schliessen
      </button>
    </div>
  );
};

export default CookieConsent2;
