import React, { useState } from "react";
import "../../css/createEvent.css";
import { Link } from "react-router-dom";

const CreateEvent = ({ onAddEvent }) => {
  const [event, setEvent] = useState({
    name: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    bgColor: "#add9f5", // Default background color
    textColor: "#000000", // Default text color
    fontFamily: "Arial", // Default font family
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(event);
    setEvent({
      name: "",
      stateDate: "",
      endDate: "",
      location: "",
      description: "",
      bgColor: "",
      textColor: "",
      fontFamily: "",
    });
  };

  return (
    <>
      <div className="event-nav">
        <h2>Create Event</h2>
        <Link to="/">
          <button type="button" className="event-button">
            Event lists
          </button>
        </Link>
      </div>
      <div className="create-container">
        <form onSubmit={handleSubmit} className="create-event-form">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={event.name}
            onChange={handleChange}
            style={{ fontWeight: "600", fontSize: "1rem" }}
          />
          <input
            type="datetime-local"
            name="startDate"
            placeholder="Date"
            value={event.startDate}
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="endDate"
            placeholder="Date"
            value={event.endDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="offline Location or online link"
            value={event.location}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={event.description}
            onChange={handleChange}
          />

          <select
            name="fontFamily"
            value={event.fontFamily}
            onChange={handleChange}
            style={{ width: "103%" }}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            {/* Add more font options as needed */}
          </select>
          <button type="submit">Create Event</button>
        </form>
        <div style={{ width: "70%", maxWidth: "45%" }}>
          <div
            className="event-preview"
            style={{
              backgroundColor: event.bgColor,
              color: event.textColor,
              fontFamily: event.fontFamily,
            }}
          >
            <h3>Preview</h3>
            <p>Name: {event.name || "Event Name"}</p>
            <p>Start Date: {event.startDate || "Event Start Date"}</p>
            <p>End Date: {event.endDate || "Event End Date"}</p>
            <p>Location: {event.location || "Event Location"}</p>
            <p className="description">
              Description: {event.description || "Event Description"}
            </p>
          </div>
          <div className="color-input">
            <div>
              <input
                type="color"
                name="bgColor"
                value={event.bgColor}
                onChange={handleChange}
              />
              <label htmlFor="bgColor" style={{ marginLeft: "8px" }}>
                {" "}
                Background color
              </label>
            </div>
            <div>
              <input
                type="color"
                name="textColor"
                value={event.textColor}
                onChange={handleChange}
              />
              <label htmlFor="textColor" style={{ marginLeft: "10px" }}>
                Text color
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
