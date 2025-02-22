// CookieConsent.jsx
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowPopup(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowPopup(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="cookie-consent-popup">
            <p>Unsere Website verwendet Cookies, um Ihnen das bestmögliche Erlebnis zu bieten.  <br />Bitte akzeptieren Sie die Verwendung von Cookies, damit keine Funktionen beeinträchtigt werden.</p>
            <button onClick={handleAccept}>Akzeptieren</button>
            <button onClick={handleReject}>Ablehnen</button>
            <a href="/datenschutz">Datenschutz</a> | <a href="/impressum">Impressum</a>
        </div>
    );
};

export default CookieConsent;
