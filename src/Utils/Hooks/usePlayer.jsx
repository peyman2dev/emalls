import React, { useEffect, useState } from "react";

export default function usePlayer({ video, setIsPlaying }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const Player = (options) => {
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      video.pause();
    }
    if (options && options.set == false) {
      setIsPlaying(false);
      video.pause();
    }
  };

  const timeUpdator = (time) => {
    setCurrentTime(Math.floor(time));
  };

  return { Player, timeUpdator, currentTime, setCurrentTime, volume, setVolume };
}
