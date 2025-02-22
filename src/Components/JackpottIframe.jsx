// src/components/JackpottIframe.jsx
import React, { useEffect, useState } from "react";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import "../Pages/InnerPage/Jackpott.css";


const JackpottIframe = () => {
  const [jackpots, setJackpots] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://gcli.li/json/jackpot.json"; 
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Netzwerkantwort war nicht ok: ${response.statusText}`);
        }
        const data = await response.json();

        const filteredJackpots = data.result.filter(jackpot =>
          ["2101", "6001", "BB01", "CCE2", "MJ01", "MJ02", "MJ03", "XTL1"].includes(jackpot.id)
        );

        setJackpots(filteredJackpots);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const formatJackpotValue = (value) => {
    const numericValue = parseFloat(value);
    return (numericValue / 100).toFixed(2);
  };

  return (
    <div className="jackpot-section">
      <h1 className="jackpot-headline text-center text-gold">AKTUELLE JACKPOTS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {error && <p className="text-red-500">Fehler: {error}</p>}
        {jackpots.map((jackpot) => (
          <div key={jackpot.id} className="jackpot-bg p-2 rounded-md flex items-center justify-between border-2 border-[#f8ea77]">
            <p className="jackpot-value flex items-center gap-1 text-[#cebb2c] text-sm sm:text-xl">
              CHF: <span className="text-lg"><AnimatedNumber value={formatJackpotValue(jackpot.value)} /></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JackpottIframe;
