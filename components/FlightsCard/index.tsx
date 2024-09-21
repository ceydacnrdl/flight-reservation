"use client";

// import { useFetchAllArrivalFlights } from "@/hooks/useFetchAllArrivalFlights";
// import React from "react";

// interface Flight {
//   prefixIATA: string;
//   scheduleDateTime: string;
//   scheduleDate: string;
//   flightDirection: string;
//   route: {
//     visa: string;
//     eu: string;
//     destinations: string[];
//   };
// }

// interface FlightsCardProps {
//   fromScheduleDate: string;
//   toScheduleDate: string;
//   arrivalDirection: string[];
//   departureDirection: string[];
// }

// export default function FlightsCard({
//   fromScheduleDate,
//   toScheduleDate,
//   arrivalDirection,
//   departureDirection,
// }: FlightsCardProps) {
//   const { data: flights } = useFetchAllArrivalFlights(
//     fromScheduleDate,
//     toScheduleDate,
//     arrivalDirection,
//     departureDirection
//   );

//   console.log(flights);

//   return (
//     <div>
//       {flights?.flights.map((flight: Flight, index: number) => (
//         <div key={index} className="p-5 w-full rounded-2xl bg-white my-5">
//           <p>Schedule DateTime: {flight.scheduleDateTime}</p>
//           <p>Schedule Date: {flight.scheduleDate}</p>
//           <p>
//             Route:
//             {flight.route.destinations.map((item, index) => {
//               return (
//                 <span key={index}>
//                   {item}
//                   {" -> "}
//                 </span>
//               );
//             })}
//           </p>
//           <p>From: {flight.prefixIATA} (Manuel olarak eklenmiş kalkış yeri)</p>
//           <p>Flight Direction: {flight.flightDirection}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import { useFetchAllArrivalFlights } from "@/hooks/useFetchAllArrivalFlights";

// interface FlightsCardProps {
//   fromScheduleDate: string;
//   toScheduleDate: string;
//   arrivalDirection: string[];
//   departureDirection: string[];
// }

// export default function FlightsCard({
//   fromScheduleDate,
//   toScheduleDate,
//   arrivalDirection,
//   departureDirection,
// }: FlightsCardProps) {
//   const { data, isLoading, error } = useFetchAllArrivalFlights(
//     fromScheduleDate,
//     toScheduleDate,
//     arrivalDirection,
//     departureDirection
//   );

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return <div>helloworld</div>;
// }

import React from "react";
import { useFetchAllArrivalFlights } from "@/hooks/useFetchAllArrivalFlights";
import { dateFormatter } from "@/helpers/dateFormatter";
import LandingIcon from "@/icons/LandingIcon";
import FlightTakeoff from "@/icons/FlightTakeoff";
import LineIcon from "@/icons/LineIcon";

interface FlightsCardProps {
  fromScheduleDate: string;
  toScheduleDate: string;
  arrivalDirection: string[];
  departureDirection: string[];
}

export default function FlightsCard({
  fromScheduleDate,
  toScheduleDate,
  arrivalDirection,
  departureDirection,
}: FlightsCardProps) {
  const {
    data: arrivalFlights,
    isLoading,
    error,
  } = useFetchAllArrivalFlights(
    fromScheduleDate,
    toScheduleDate,
    arrivalDirection,
    departureDirection
  );
  // const { data: flightsCode } = useFetchFlightsCode();
  // console.log(flightsCode);

  console.log("arrival flights", arrivalFlights);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {arrivalFlights?.flights.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (flight: any) => (
          <>
            <div
              key={flight.flightName}
              className="pt-5 w-full rounded-t-2xl rounded-br-2xl bg-white mt-5"
            >
              <div className="px-5">
                <div className="mb-2 ">Flight: {flight.flightName}</div>
                <div className="flex justify-between">
                  <div className="relative">
                    <div className="flex">
                      <FlightTakeoff />
                      <div>Departure</div>
                    </div>
                    <div className="font-bold">
                      {dateFormatter(flight.scheduleTime)}
                    </div>
                    <div>
                      {"Airport:"}
                      {flight.flightDirection === "D"
                        ? flight.route.destinations[0]
                        : "AMS"}
                    </div>
                  </div>
                  <div className="content-center">
                    <LineIcon />
                  </div>
                  <div>2</div>
                  <div className="content-center">
                    <LineIcon />
                  </div>
                  <div>
                    <div className="flex">
                      <LandingIcon />
                      <div>Arrival</div>
                    </div>
                    <div className="font-bold">
                      {dateFormatter(flight.scheduleTime)}
                    </div>
                    <div>
                      {"Airport:"}{" "}
                      {flight.flightDirection === "A"
                        ? flight.route.destinations[0]
                        : "AMS"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="mt-5 relative rounded-tl-2xl rounded-br-2xl bg-purple-800 text-white px-10 p-5">
                  Book Flight
                </button>
              </div>
            </div>
            <button
              key={flight.flightName}
              className="relative bg-gray-200 p-5 rounded-b-2xl text-purple-800 underline cursor-pointer"
            >
              Check the details
            </button>
          </>
        )
      )}
    </div>
  );
}
