"use client";

import React, { useState } from "react";
import FlightsCard from "../FlightsCard";
import PlaneIcon from "@/icons/PlaneIcon";
import clsx from "clsx";
import FilterBox from "../FilterBox";

export default function FlightsFinder() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [startScheduleDate, setStartScheduleDate] = useState("2024-09-20");
  const [endScheduleDate, setEndScheduleDate] = useState("2024-09-22");
  const [searchParams, setSearchParams] = useState({
    fromScheduleDate: "2024-09-20",
    toScheduleDate: "2024-09-22",
    arrivalDirection: ["A", ""],
    departureDirection: ["D", ""],
  });
  const [roundTripClicked, setRoundTripClicked] = useState(true);

  const handleSearch = () => {
    setSearchParams({
      ...searchParams,
      arrivalDirection: ["A", arrival.toUpperCase()],
      departureDirection: ["D", departure.toUpperCase()],
      fromScheduleDate: startScheduleDate.replace(/\./g, "-"),
      toScheduleDate: endScheduleDate,
    });
  };

  return (
    <>
      <div className="p-5 w-full rounded-2xl bg-white">
        <div className="flex flex-col md:flex-row justify-between w-full bg-white text-black p-5">
          <div className="flex items-center mb-4 md:mb-0">
            <PlaneIcon />
            <div className="text-lg font-medium">BOOK YOUR FLIGHT</div>
          </div>
          <div className="flex flex-col md:flex-row">
            <button
              className={clsx(
                "rounded-l-full px-5 py-2",
                roundTripClicked
                  ? "bg-purple-800 text-white"
                  : "bg-gray-200 text-purple-800"
              )}
              onClick={() => {
                setRoundTripClicked(true);
              }}
            >
              Round Trip
            </button>
            <button
              className={clsx(
                "rounded-r-full px-5 py-2",
                roundTripClicked
                  ? "bg-gray-200 text-purple-800"
                  : "bg-purple-800 text-white"
              )}
              onClick={() => {
                setRoundTripClicked(false);
              }}
            >
              One Way
            </button>
          </div>
        </div>
        <div className="py-3 grid grid-flow-row md:grid-flow-col justify-stretch gap-2">
          <input
            type="text"
            placeholder="Departure Airport"
            value={departure}
            onChange={(e) => setDeparture(e.target.value.toUpperCase())}
            className="text-black rounded-l-2xl border-2 border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="Arrival Airport"
            value={arrival}
            onChange={(e) => setArrival(e.target.value.toUpperCase())}
            className="text-black rounded-r-2xl border-2 border-gray-300 p-2"
          />
          <input
            type="date"
            value={startScheduleDate}
            onChange={(e) => setStartScheduleDate(e.target.value)}
            className="text-black rounded-l-2xl border-2 border-gray-300 p-2"
          />
          <input
            type="date"
            value={endScheduleDate}
            onChange={(e) => setEndScheduleDate(e.target.value)}
            className="text-black rounded-r-2xl border-2 border-gray-300 p-2"
          />
        </div>
        <button
          className=" bg-purple-800 mt-2 rounded-lg p-2 text-white"
          onClick={handleSearch}
        >
          Show Flights
        </button>
      </div>

      <div className="flex">
        <div className="relative w-full">
          <FlightsCard
            fromScheduleDate={searchParams.fromScheduleDate}
            toScheduleDate={searchParams.toScheduleDate}
            arrivalDirection={searchParams.arrivalDirection}
            departureDirection={searchParams.departureDirection}
          />
        </div>

        <div className="relative w-1/3 ml-5">
          <FilterBox />
        </div>
      </div>
    </>
  );
}
