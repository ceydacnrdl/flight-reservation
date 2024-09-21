import PlaneIcon from "@/icons/PlaneIcon";
import React from "react";

export default function Header() {
  return (
    <div className="relative w-full bg-transparent p-5">
      <div className="flex justify-between">
        <div className="flex ">
          <PlaneIcon />
          <div className="text-lg font-bold	">PLANE SCAPE</div>
        </div>
        <div>Admin tools</div>
      </div>
    </div>
  );
}
