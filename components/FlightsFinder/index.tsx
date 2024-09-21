"use client";

// import React from "react";
// import FlightsCard from "../FlightsCard";

// export default function FlightsFinder() {
//   const fromScheduleDate = "2024-10-01";
//   const toScheduleDate = "2024-10-04";
//   const arrivalDirection = ["A", "AMS"];
//   const departureDirection = ["D", "IST"];

//   return (
//     <>
//       <div className="p-5 w-full rounded-2xl bg-white">
//         <div className="flex justify-between w-full bg-white text-black p-5">
//           <div className="">BOOK YOUR FLIGHT</div>
//           <div className="relative gap-2">
//             <button className=" bg-purple-600 rounded-l-lg p-2">
//               Round Trip
//             </button>
//             <button className="rounded-r-lg p-2">One Way</button>
//           </div>
//         </div>
//         <div className="py-3 grid grid-flow-col justify-stretch gap-2">
//           <input
//             type="text"
//             className="text-black rounded-l-lg shadow-lg border-2 border-gray-500"
//           ></input>

//           <input
//             type="text"
//             className="text-black rounded-r-lg shadow-lg border-2 border-gray-500"
//           />
// <input
//   type="text"
//   className="text-black rounded-l-lg shadow-lg border-2 border-gray-500"
// />
// <input
//   type="text"
//   className="text-black rounded-r-lg shadow-lg border-2 border-gray-500"
// />
//         </div>
//         <button className=" bg-purple-600 mt-2 rounded-lg p-2">
//           Show Flights
//         </button>
//       </div>
//       <div className="relative w-3/4">
//         <FlightsCard
//           fromScheduleDate={fromScheduleDate}
//           toScheduleDate={toScheduleDate}
//           arrivalDirection={arrivalDirection}
//           departureDirection={departureDirection}
//         />
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import FlightsCard from "../FlightsCard";
import PlaneIcon from "@/icons/PlaneIcon";
import clsx from "clsx";

export default function FlightsFinder() {
  const [departure, setDeparture] = useState("FAO"); // Kalkış
  const [arrival, setArrival] = useState("AMS"); // Varış
  const [searchParams, setSearchParams] = useState({
    fromScheduleDate: "2024-09-20",
    toScheduleDate: "2024-09-22",
    arrivalDirection: ["A", ""],
    departureDirection: ["D", "AMS"],
  });
  const [roundTripClicked, setRoundTripClicked] = useState(true);

  const handleSearch = () => {
    // Eğer hem kalkış noktası hem de varış noktası boşsa, kalkış noktasını AMS olarak ayarlıyoruz.
    if (!departure && !arrival) {
      setDeparture("AMS");
    } else {
      // Eğer kalkış noktası boşsa, varsayılan olarak AMS'yi atıyoruz.
      if (!departure) setDeparture("AMS");
    }

    // Arama parametrelerini güncelliyoruz.
    setSearchParams({
      ...searchParams,
      arrivalDirection: ["A", arrival.toUpperCase()],
      departureDirection: ["D", departure.toUpperCase()],
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
            type="text"
            className="text-black rounded-l-2xl border-2 border-gray-300 p-2"
          />
          <input
            type="text"
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

      <div className="relative w-3/4">
        <FlightsCard
          fromScheduleDate={searchParams.fromScheduleDate}
          toScheduleDate={searchParams.toScheduleDate}
          arrivalDirection={searchParams.arrivalDirection}
          departureDirection={searchParams.departureDirection}
        />
      </div>
    </>
  );
}
