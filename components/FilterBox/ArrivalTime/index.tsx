import React from "react";

export default function ArrivalTime() {
  return (
    <div>
      <div className="font-bold mb-2">Arrival Time</div>

      <div>
        <input className="mb-3 mr-2" type="radio" checked />
        <label>5:00 AM - 11:59 AM</label>
      </div>

      <div>
        <input className="mb-3 mr-2" type="radio" />
        <label>12:00 PM - 5:59 PM</label>
      </div>
    </div>
  );
}
