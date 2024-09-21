import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fromScheduleDate = searchParams.get("fromScheduleDate");
  const toScheduleDate = searchParams.get("toScheduleDate");
  const flightDirection = searchParams.get("flightDirection");

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("app_id", process.env.APP_ID!);
  headers.append("app_key", process.env.APP_KEY!);
  headers.append("ResourceVersion", "v4");
  try {
    const response = await fetch(
      `https://api.schiphol.nl/public-flights/flights?flightDirection=${flightDirection}&includedelays=false&page=0&sort=%2BscheduleTime&fromScheduleDate=${fromScheduleDate}&toScheduleDate=${toScheduleDate}`,
      {
        headers,
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `HTTP error! status: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch flights data" },
      { status: 500 }
    );
  }
}
