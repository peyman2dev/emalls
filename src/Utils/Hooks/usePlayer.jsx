import React, { useEffect, useState } from "react";

export default function usePlayer({ video }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    precent: 0,
  });
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [focusPos, setFocusPos] = useState(0);
  const Player = (options) => {
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      video.pause();
    }
    if (options) {
      setIsPlaying(false);
      video.pause();
    }
  };

  const volumeHandler = (e) => {
  };

  const timeUpdator = (time) => {
    setCurrentTime(Math.floor(time));
  };
  const spaceBtnHandler = () => {
    if (show && !isPlaying) {
      video.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      video.pause();
    }
  };
  window.onkeydown = (event) => {
    const { keyCode } = event;
    if (keyCode == 32) {
      console.log(keyCode);
      spaceBtnHandler();
    }
  };

  useEffect(() => {
    if (video) {
      setDuration(Math.floor(video.duration));
      video.volume = volume;
    }
  }, [video, currentTime]);

  const updateCurrentTime = (newCurrentTime) => {
    if (video) {
      video.currentTime = newCurrentTime;
    }
  };
  return {
    Player,
    currentTime,
    volume,
    timeUpdator,
    setVolume,
    duration,
    updateCurrentTime,
    setIsPlaying,
    isPlaying,
    spaceBtnHandler,
    progress,
    focusPos,
    volumeHandler,
    setFocusPos,
    setProgress,
    show,
    setShow,
  };
}
