import React, { useContext, useEffect } from "react";
import { BiPlay } from "react-icons/bi";
import VideoContext from "../../../../Utils/Contexts/VideoContext";
import { FaPause } from "react-icons/fa6";
import Volume from "./Volume/Volume";
import usePlayer from "../../../../Utils/Hooks/usePlayer";

export default function Controls() {
  const { Video } = useContext(VideoContext);
  useEffect(() => {
    if (Video) {
      Video.setProgress((prev) => ({
        ...prev,
        precent: Math.floor((Video.currentTime / Video.duration) * 100),
      }));
    }
  }, [Video.currentTime]);

  return (
    <footer className="absolute child:h-full gap-2 child-ic child:gap-2 px-5 h-10 bg-slate-600/60 w-full text-white between bottom-0 backdrop-blur-sm">
      <div className="ic gap-1 font-price text-sm">
        <span>:</span>
        <span></span>
      </div>
      <div className="w-[90%]">
        <div className="w-full h-1 cursor-pointer bg-white/40 rounded-lg  relative">
          <div
            className="absolute p-2 rounded-t-2xl bg-black/50 px-6 text-white bottom-[110%]"
            style={{ left: 1 + "%" }}
          >
            2
          </div>
          <div
            className="h-full absolute left-0  bg-white transition-all  ic cursor-pointer"
            style={{ width: Video.progress.precent + "%" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-white absolute right-0"></div>
          </div>
        </div>
      </div>
      <div className="ic gap-2">
        <Volume />
        <button
          onClick={() => {
            Video.Player();
          }}
          className="text-3xl flex-center"
        >
          {Video.isPlaying ? <FaPause className="text-2xl" /> : <BiPlay />}
        </button>
      </div>
    </footer>
  );
}
