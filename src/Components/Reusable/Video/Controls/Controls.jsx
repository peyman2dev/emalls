import React, { useContext, useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import VideoContext from "../../../../Utils/Contexts/VideoContext";

export default function Controls() {
  const { source, isPlaying, setIsPlaying } = useContext(VideoContext);



  return (
    <div className="absolute  bottom-0 w-full h-14 bg-secondary/40  backdrop-blur-sm text-white px-5 between">
      <div></div>
      <div></div>
      <div className="ic gap-1 text-2xl">
        <button onClick={() => videoPlay()}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
}
