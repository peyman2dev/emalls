import React, { useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";

export default function Volume() {
  return (
    <div className="ic gap-1 relative group">
      <div className="group-hover:w-[40px] duration-150 w-[0] bg-white/40 rounded-lg">
        <div className="relative h-1 rounded-lg">
          <button></button>
        </div>
      </div>
      <span className="text-lg flex-center cursor-pointer">
        <FaVolumeHigh />
      </span>
    </div>
  );
}
