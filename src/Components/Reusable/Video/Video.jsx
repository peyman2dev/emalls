import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import Controls from "./Controls/Controls";
import usePlayer from "../../../Utils/Hooks/usePlayer";
import VideoContext from "../../../Utils/Contexts/VideoContext";

export default function Video({ video }) {
  const [show, setShow] = useState(false);
  const videoRef = useRef();

  const Video = usePlayer({ video: videoRef.current });
  useEffect(() => {

  }, [Video.currentTime]);

  return (
    <VideoContext.Provider
      value={{
        Video,
      }}
    >
      <article className="w-[280px] h-[380px] bg-black overflow-hidden rounded-xl">
        {/* Cover */}
        <div
          onClick={() => setShow(!show)}
          className="relative w-full select-none cursor-pointer flex-center h-full"
        >
          <img src={video.cover} className="w-full" alt="" />
          <span className="absolute z-10 text-white text-3xl w-12 h-12 flex-center pl-1 bg-secondary/70 backdrop-blur-sm rounded-full">
            <FaPlay />
          </span>
          <div className="absolute w-full h-full bg-gradient-to-t from-black/40 backdrop-blur-[2px]"></div>
        </div>

        <section
          onClick={() => {
            setShow(!show);
            Video.Player({ set: false });
          }}
          className={`blurry-screen ${show ? "" : "opacity-0 invisible"}`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-black relative rounded-2xl overflow-hidden lg:w-[80%] text-white w-full h-full lg:h-[80%]"
          >
            <header className="absolute z-[2] left-5 top-3">
              <button
                onClick={() => {
                  setShow(!show);
                  Video.Player();
                }}
              >
                خروج
              </button>
            </header>
            <main className="w-full h-full relative flex-center">
              <video
                onTimeUpdate={(event) =>
                  Video.timeUpdator(event.target.currentTime)
                }
                ref={videoRef}
                onClick={() => Video.Player()}
                src={video.url}
                className="w-full h-full cursor-pointer"
              ></video>
              {!Video.isPlaying && (
                <button className="absolute">
                  <span className=" z-10 text-white text-2xl w-12 h-12 flex-center  bg-black/40 backdrop-blur-sm rounded-full">
                    <FaPlay />
                  </span>
                </button>
              )}
            </main>
            <Controls />
          </div>
        </section>
      </article>
    </VideoContext.Provider>
  );
}
