import React, { createContext, useContext, useState } from 'react';

const MoneyRainContext = createContext();

export const useMoneyRain = () => useContext(MoneyRainContext);

export const MoneyRainProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMoneyRain = () => setIsActive(!isActive);

  return (
    <MoneyRainContext.Provider value={{ isActive, toggleMoneyRain }}>
      {children}
    </MoneyRainContext.Provider>
  );
};