import React from "react";

export default function PriceSorter() {
  return (
    <div className="mb-5">
      <div className="font-bold mb-2">Sort by:</div>
      <select id="price" className="w-full p-2 rounded-xl">
        <option value="lowestPrice">Lowest Price</option>
        <option value="higherPrice">Higher Price</option>
      </select>
    </div>
  );
}
