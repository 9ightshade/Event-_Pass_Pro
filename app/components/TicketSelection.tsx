"use client";
import React from "react";
import { useState } from "react";
const TicketSelection = () => {
  const [ticketType, setTicketType] = useState("free");
  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketTypeChange = (type: React.SetStateAction<string>) => {
    setTicketType(type);
  };

  const handleTicketCountChange = (event: { target: { value: string; }; }) => {
    setTicketCount(parseInt(event.target.value));
  };
  return (
    <div>
      <div className="ticket-selection">
        <h2>Ticket Selection</h2>
        <p>Step 1/3</p>

        <div className="event-info">
          <h3>Techember Fest "25"</h3>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p>[Event Location] || March 15, 2025 | 7:00 PM</p>
        </div>

        <div className="ticket-types">
          <button onClick={() => handleTicketTypeChange("free")}>
            Free <br /> REGULAR ACCESS <br /> 20/52
          </button>
          <button onClick={() => handleTicketTypeChange("vip")}>
            $150 <br /> VIP ACCESS <br /> 26/52
          </button>
          <button onClick={() => handleTicketTypeChange("vvip")}>
            $150 <br /> VVIP ACCESS <br /> 23/52
          </button>
        </div>

        <div className="ticket-quantity">
          <label htmlFor="ticket-count">Number of Tickets:</label>
          <select
            id="ticket-count"
            value={ticketCount}
            onChange={handleTicketCountChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="buttons">
          <button>Cancel</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
