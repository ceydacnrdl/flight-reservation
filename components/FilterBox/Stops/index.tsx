import React from "react";

export default function Stops() {
  return (
    <div>
      <div className="font-bold mb-2">Stops</div>

      <div>
        <input className="mb-3 mr-2" type="radio" checked />
        <label>Nonstop</label>
      </div>

      <div>
        <input className="mb-3 mr-2" type="radio" />
        <label>1 Stop</label>
      </div>

      <div>
        <input className="mb-3 mr-2" type="radio" />
        <label>2+ Stop</label>
      </div>
    </div>
  );
}
