import React, { useState } from "react";
import "../../css/eventList.css";
import EventToggle from "../../components/Eventtoggle";
import { Link } from "react-router-dom";
const EventList = ({ events }) => {
  const [totalEvents, setTotalEvents] = useState(events);

  function filterUpcomingEvents() {
    const currentDateTime = new Date();
    const upcoming = events.filter((event) => {
      const eventStartDate = new Date(event.startDate);
      return eventStartDate > currentDateTime;
    });
    setTotalEvents(upcoming);
  }

  function filterPastEvents() {
    const currentDateTime = new Date();
    const pastEvent = events.filter((event) => {
      const eventStartDate = new Date(event.startDate);
      return eventStartDate <= currentDateTime;
    });
    setTotalEvents(pastEvent);
  }

  return (
    <div className="event-list">
      <div className="list-nav">
        <h2>Events List</h2>
        <EventToggle
          handleUpcoming={filterUpcomingEvents}
          handlePast={filterPastEvents}
        />
        <Link to={"/events"}>
          <button type="button" className="event-button">
            Create Event
          </button>
        </Link>
      </div>
      {totalEvents.map((event, index) => (
        <div
          key={index}
          className="event-item"
          style={{
            backgroundColor: event.bgColor,
            color: event.textColor,
            fontFamily: event.fontFamily,
          }}
        >
          <h2>{event.name}</h2>
          <p>Start Date: {event.startDate?.replace("T", " ")}</p>
          <p>End Date: {event.endDate?.replace("T", " ")}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
