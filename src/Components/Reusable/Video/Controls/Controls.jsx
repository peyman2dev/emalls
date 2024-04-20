import React, { useContext } from "react";
import { BiPlay } from "react-icons/bi";
import VideoContext from "../../../../Utils/Contexts/VideoContext";
import { FaPause } from "react-icons/fa6";
import Volume from "./Volume/Volume";

export default function Controls() {
  const { isPlaying, setIsPlaying, Player } = useContext(VideoContext);
  return (
    <footer className="absolute child:h-full child-ic child:gap-2 px-5 h-10 bg-slate-600/60 w-full text-white between bottom-0 backdrop-blur-sm">
      <div></div>
      <div></div>
      <div className="ic gap-2">
        <Volume />
        <button onClick={() => Player()} className="text-3xl flex-center">
          {isPlaying ? <FaPause className="text-2xl" /> : <BiPlay />}
        </button>
      </div>
    </footer>
  );
}
