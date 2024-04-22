import React, { useContext, useEffect, useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import VideoContext from "../../../../../Utils/Contexts/VideoContext";

export default function Volume() {
  const { Video } = useContext(VideoContext);
  useEffect(() => {
    if (Video) {
    }
  }, [Video]);

  return (
    <div className="ic gap-1 relative group">
      <div
        onClick={(event) => Video.volumeHandler(event)}
        className="group-hover:w-[40px] duration-150 relative w-[0] bg-white/40 rounded-lg"
      >
        <div className="relative h-1 rounded-lg">
          <button
            className="absolute left-0 h-full bg-white ic"
            style={{ width: Video.volume * 100 + "%" }}
          >
            <span className="absolute w-1.5 h-1.5 rounded-full bg-white right-0 group-hover:visible hidden invisible group-hover:block"></span>
          </button>
        </div>
      </div>
      <span className="text-lg flex-center cursor-pointer">
        <FaVolumeHigh />
      </span>
    </div>
  );
}
