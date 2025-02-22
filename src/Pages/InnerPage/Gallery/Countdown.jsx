import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-10-31T00:00:00+02:00").getTime(); // Zielzeit


    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="countdown" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div id='tiles' style={{ display: 'flex', justifyContent: 'space-around', width: '100%', maxWidth: '600px', flexGrow: 1 }}>
        <span style={{ flex: '1 1 0', textAlign: 'center' }}>{timeLeft.days}</span>
        <span style={{ flex: '1 1 0', textAlign: 'center' }}>{timeLeft.hours}</span>
        <span style={{ flex: '1 1 0', textAlign: 'center' }}>{timeLeft.minutes}</span>
        <span style={{ flex: '1 1 0', textAlign: 'center' }}>{timeLeft.seconds}</span>
      </div>
      <div className="labels" style={{ display: 'flex', justifyContent: 'space-around', width: '100%', maxWidth: '600px', flexGrow: 1 }}>
        <li style={{ flex: '1 1 0', textAlign: 'center' }}>Day</li>
        <li style={{ flex: '1 1 0', textAlign: 'center' }}>Hour</li>
        <li style={{ flex: '1 1 0', textAlign: 'center' }}>Min</li>
        <li style={{ flex: '1 1 0', textAlign: 'center' }}>Sec</li>
      </div>
    </div>
  );
};

export default Countdown;
