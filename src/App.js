import React, { useState } from "react";
import CreateEvent from "./pages/CreateEvent";
import EventList from "./pages/EventList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [events, setEvents] = useState([
    {
      name: "event 1",
      startDate: "2023-11-20T12:43",
      endDate: "2023-11-29T12:43",
      location: "Bangalore",
      description: "Event for developers",
      bgColor: "#add9f5", // Default background color
      textColor: "#000000", // Default text color
      fontFamily: "Arial", // Default font family
    },
  ]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventList events={events} />} />
        <Route path="/events" element={<CreateEvent onAddEvent={addEvent} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
