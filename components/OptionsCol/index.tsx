import React from "react";
import CarRentals from "@/assets/CarRentals.png";
import Hotels from "@/assets/Hotels.png";
import TravelPackages from "@/assets/TravelPackages.png";
import Image from "next/image";
import Link from "next/link";

export default function OptionsCol() {
  return (
    <div className="w-full flex flex-col space-y-4">
      <Link
        href={
          "https://www.rentalcars.com/?affiliateCode=google&preflang=us&label=generic:md6XZeI9iDZ7uMywytU7IxVA:tyS:cr427470927057:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-21068290:lp1012764:li:dec:dm:ws&gad_source=1&gclid=Cj0KCQjwurS3BhCGARIsADdUH51XZ7BlEqO0VvfXUuqXTAqau5xN0FDUSVpIgb984MQMpw_o4MNHEtQaAqOTEALw_wcB"
        }
        className="w-full h-auto"
      >
        <Image
          src={CarRentals}
          alt="Car Rentals"
          className="object-contain rounded-2xl"
        />
      </Link>

      <Link
        href={
          "https://www.booking.com/index.tr.html?label=gog235jc-1DCAEoggI46AdIM1gDaOQBiAEBmAEouAEXyAEM2AED6AEBiAIBqAIDuAL5xLe3BsACAdICJDNjZWFjNTYzLWZjZWEtNDlmOS05ZTRhLTk3NWU3Y2ZkNzc2ONgCBOACAQ&sid=a904702a142441da8c13c44e58477a21&aid=397594&selected_currency=TRY"
        }
        className="w-full h-auto"
      >
        <Image
          src={Hotels}
          alt="Hotels"
          className="object-contain rounded-2xl"
        />
      </Link>
      <Link
        href={
          "https://www.booking.com/attractions/index.tr.html?label=gog235jc-1BCAMo5AFCB2FudGFseWFIM1gDaOQBiAEBmAEouAEYyAEM2AEB6AEBiAIBqAIEuAKIxLe3BsACAdICJGUwNjI1ZDZlLTU3N2QtNGJmZS1iNjQ3LWYzN2I5ODVlNzA0Y9gCBeACAQ&sid=a904702a142441da8c13c44e58477a21&aid=356980&selected_currency=TRY"
        }
        className="w-full h-auto"
      >
        <Image
          src={TravelPackages}
          alt="Travel Packages"
          className="object-contain rounded-2xl"
        />
      </Link>
    </div>
  );
}
