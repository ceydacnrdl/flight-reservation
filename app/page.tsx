import FlightsFinder from "@/components/FlightsFinder";
import Header from "@/components/Header";
import OptionsCol from "@/components/OptionsCol";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row w-full">
        <div className="relative w-full md:w-3/4 p-5">
          <FlightsFinder />
        </div>
        <div className="flex w-full md:w-1/4 p-5">
          <OptionsCol />
        </div>
      </div>
    </div>
  );
}
