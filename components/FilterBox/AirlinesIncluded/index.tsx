"use client";

import React, { useState } from "react";

export default function AirlinesIncluded() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <div className="font-bold mb-2">Stops</div>

      <div>
        <input
          className="mb-3 mr-2"
          type="radio"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>Alitalia</label>
      </div>

      {/* <div>
        <input
          className="mb-3 mr-2"
          type="radio"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>Lufthansa</label>
      </div>

      <div>
        <input
          className="mb-3 mr-2"
          type="radio"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>Air France</label>
      </div> */}
    </div>
  );
}
