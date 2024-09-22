import { useQuery } from "@tanstack/react-query";

export const QUERY_KEY = ["flightsCode"];

export function useFetchFlightsCode(iata: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, iata],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/flightsCode?iata=${iata}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      } catch (error) {
        console.error("Fetch error:", error);
        return null;
      }
    },
  });
}
