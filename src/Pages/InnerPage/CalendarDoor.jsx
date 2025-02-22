import React from "react";
import "./CalendarDoor.css";

const CalendarDoor = ({ day, onHoverText }) => {
  return (
    <div className="calendar-wrap">
      <span className="animated-title">{onHoverText || "Roulette Christmas"}</span>
      <div className="calendar-day">{day}</div>
      <div className="left-door">
        <div className="door-panel"></div>
      </div>
      <div className="right-door">
        <div className="door-panel"></div>
      </div>
    </div>
  );
};

export default CalendarDoor;
