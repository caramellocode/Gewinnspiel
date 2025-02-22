import React, { useState } from "react";
import "./EventCalendar.css";


const EventCalendar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null); // State für die Popup-Karte
  const eventsPerPage = 7;

  const sampleEvents = [
    { date: "15", month: "Jan", title: "Damen Tag", image: "/images/home-1/event1.jpg" },
    { date: "16", month: "Jan", title: "Herren Tag", image: "/images/home-1/projekt2.jpg" },
    { date: "19", month: "Jan", title: "Damen Tag", image: "/images/home-1/event1.jpg" },
    { date: "19", month: "Jan", title: "Glücksrad", image: "/images/event4.jpg" },
    { date: "20", month: "Jan", title: "WARRIORS!", image: "/images/event5.jpg" },
    { date: "22", month: "Jan", title: "POKER NIGHT", image: "/images/event6.jpg" },
    { date: "25", month: "Jan", title: "Big Events", image: "/images/event7.jpg" },
    { date: "27", month: "Jan", title: "Grand days", image: "/images/event8.jpg" },
    { date: "30", month: "Jan", title: "MUSIC FESTIVAL", image: "/images/event9.jpg" },
    { date: "5", month: "Feb", title: "WINTER BALL", image: "/images/event10.jpg" },
    { date: "10", month: "Feb", title: "Boommer party", image: "/images/event11.jpg" },
  ];

  const startIndex = currentPage * eventsPerPage;
  const displayedEvents = sampleEvents.slice(startIndex, startIndex + eventsPerPage);

  const nextPage = () => {
    if (startIndex + eventsPerPage < sampleEvents.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openPopup = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-calendar-container">
       <img src="/images/home-1/rooftop3.jpg" alt="Titelbild" className="event-title-image" />
      {/* Event-Liste */}
      <div className="event-calendar">
        {displayedEvents.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-date">
              <span className="event-day">{event.date}</span>
              <span className="event-month">{event.month}</span>
            </div>
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <button
                className="event-button"
                onClick={() => openPopup(event)}
              >
                MEHR ERFAHREN
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigations-Buttons */}
      <div className="event-navigation">
        <button onClick={prevPage} disabled={currentPage === 0}>
          ⬅️ Vorherige Seite
        </button>
        <button
          onClick={nextPage}
          disabled={startIndex + eventsPerPage >= sampleEvents.length}
        >
          Nächste Seite ➡️
        </button>
      </div>

      {/* Popup-Karte */}
      {selectedEvent && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()} // Verhindert das Schließen beim Klicken auf die Karte
          >
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="popup-image"
            />
            <h2 className="popup-title">{selectedEvent.title}</h2>
            <button className="popup-close-button" onClick={closePopup}>
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
