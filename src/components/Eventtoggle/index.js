import React, { useState } from "react";
import "../../css/eventToggle.css"; // Make sure to create a CSS file for styles

const EventToggle = ({ handleUpcoming, handlePast }) => {
  const [selected, setSelected] = useState("upcoming"); // 'upcoming' or 'past'

  return (
    <div className="event-toggle">
      <button
        className={`toggle-option ${selected === "upcoming" ? "selected" : ""}`}
        onClick={() => {
          setSelected("upcoming");
          handleUpcoming();
        }}
      >
        Upcoming
      </button>
      <button
        className={`toggle-option ${selected === "past" ? "selected" : ""}`}
        onClick={() => {
          setSelected("past");
          handlePast();
        }}
      >
        Past
      </button>
    </div>
  );
};

export default EventToggle;
