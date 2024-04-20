import React, { useRef, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { FaPlay } from "react-icons/fa6";
import Controls from "./Controls/Controls";
import VideoContext from "../../../Utils/Contexts/VideoContext";
import Player from "./Funcs/Player";

export default function Video({ video }) {
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  return (
    <VideoContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        source: videoRef.current,
        Player
      }}
    >
      <article className="relative">
        <div
          onClick={() => setShow(!show)}
          className="w-[270px] h-[380px] rounded-2xl overflow-hidden"
        >
          <button className="w-full h-full relative flex-center">
            <img
              src={video.cover}
              className="object-cover w-full h-full"
              alt=""
            />
            <div className="absolute w-full h-full flex-center">
              <span className="absolute w-12 text-white h-12 flex-center rounded-full bg-secondary/70">
                <FaPlay variant="Bold" className="text-2xl text-white" />
              </span>
            </div>
          </button>
        </div>
        <section
          onClick={() => setShow(!show)}
          className={`blurry-screen ${show ? "" : "opacity-0 invisible"}`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`flex-center lg:w-[80%] h-[80%] rounded-xl overflow-hidden relative bg-black ${
              show ? "" : "scale-0"
            } duration-300 `}
          >
            <video
              ref={videoRef}
              src={video.url}
              className="h-full w-full"
            ></video>
            <Controls source={videoRef} />
          </div>
        </section>
      </article>
    </VideoContext.Provider>
  );
}
