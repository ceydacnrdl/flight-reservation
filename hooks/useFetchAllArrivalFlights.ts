// import { useQuery } from "@tanstack/react-query";

// export const QUERY_KEY = ["allFlights"];

// export function useFetchAllFlights() {
//   return useQuery({
//     queryKey: QUERY_KEY,
//     queryFn: async () => {
//       try {
//         const response = await fetch("/api/flights");

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         return response.json();
//       } catch (error) {
//         console.error("Fetch error:", error);
//         return null;
//       }
//     },
//   });
// }

// ---------------------------------------------------------------------------

// import { useQuery } from "@tanstack/react-query";

// export const QUERY_KEY = ["allFlights"];

// export function useFetchAllArrivalFlights(
//   fromScheduleDate: string,
//   toScheduleDate: string,
//   arrivalDirection: string[],
//   departureDirection: string[]
// ) {
//   return useQuery({
//     queryKey: [
//       ...QUERY_KEY,
//       fromScheduleDate,
//       toScheduleDate,
//       arrivalDirection,
//       departureDirection,
//     ],
//     queryFn: async () => {
//       try {
//         const response = await fetch(
//           `/api/flights?route=${departureDirection[1]}&flightDirection=${departureDirection[0]}&fromScheduleDate=${fromScheduleDate}&toScheduleDate=${toScheduleDate}`
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         return response.json();
//       } catch (error) {
//         console.error("Fetch error:", error);
//         return null;
//       }
//     },
//   });
// }

import { useQuery } from "@tanstack/react-query";

export const QUERY_KEY = ["allFlights"];

export function useFetchAllArrivalFlights(
  fromScheduleDate: string,
  toScheduleDate: string,
  arrivalDirection: string[],
  departureDirection: string[]
) {
  return useQuery({
    queryKey: [
      ...QUERY_KEY,
      fromScheduleDate,
      toScheduleDate,
      arrivalDirection,
      departureDirection,
    ],
    queryFn: async () => {
      try {
        const response = await fetch(
          `/api/flights?route=${departureDirection[1]}&flightDirection=${departureDirection[0]}&fromScheduleDate=${fromScheduleDate}&toScheduleDate=${toScheduleDate}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filteredFlights = data.flights.filter((flight: any) => {
          const isDepartureMatch =
            flight.flightDirection === "D" &&
            flight.route.destinations.includes(departureDirection[1]);
          const isArrivalMatch =
            flight.flightDirection === "A" &&
            flight.route.destinations.includes(arrivalDirection[1]);
          return isDepartureMatch || isArrivalMatch;
        });

        return { flights: filteredFlights };
      } catch (error) {
        console.error("Fetch error:", error);
        return null;
      }
    },
  });
}
