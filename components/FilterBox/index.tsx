import React from "react";
import PriceSorter from "./PriceSorter";
import ArrivalTime from "./ArrivalTime";
import Stops from "./Stops";
import AirlinesIncluded from "./AirlinesIncluded";

export default function FilterBox() {
  return (
    <div
      className="pt-5 w-full rounded-t-2xl rounded-br-2xl mt-5 h-full"
      style={{ accentColor: "purple" }}
    >
      <PriceSorter />
      <ArrivalTime />
      <Stops />
      <AirlinesIncluded />
    </div>
  );
}
