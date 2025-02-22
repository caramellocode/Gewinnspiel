import React, { useState, useEffect } from 'react';
import './money.css';

const MoneyRain = () => {
  const [moneyList, setMoneyList] = useState([]);
  const maxMoneyCount = 500; // Maximale Anzahl von Geldscheinen

  useEffect(() => {
    const interval = setInterval(() => {
      setMoneyList(currentMoney => {
        const newMoney = {
          id: currentMoney.length,
          style: {
            left: `${10 + Math.random() * 80}vw`,
            animationDuration: `${6 + Math.random() * 4}s`
          }
        };
        return [...currentMoney, newMoney];
      });

      if (moneyList.length >= maxMoneyCount) {
        clearInterval(interval);
      }
    }, 100); // Zeitintervall zwischen dem Hinzufügen neuer Geldscheine

    return () => clearInterval(interval); // Cleanup bei Unmount
  }, [moneyList.length]);

  return (
    <div>
      {moneyList.map(money => (
        <div key={money.id} className="money" style={money.style}></div>
      ))}
    </div>
  );
};

export default MoneyRain;






