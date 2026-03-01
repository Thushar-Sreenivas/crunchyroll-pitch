"use client";

import { useEffect, useRef, useState } from "react";

const AUDIO_SOURCE =
  "https://hoang.moe/wp-content/uploads/2020/04/Magical-Piano-Version.mp3";

function AudioIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      aria-hidden="true"
    >
      <g transform="matrix(12.920000076293945,0,0,12.920000076293945,-750.6400146484375,-247.760009765625)">
        <g opacity="0.57" transform="matrix(1,0,0,1,102.5,64.5)">
          <path
            d="M0,-9 C0,-9 0,9 0,9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
        <g opacity="0.57" transform="matrix(1,0,0,1,98.5,65.5)">
          <path
            d="M0,-4 C0,-4 0,4 0,4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
        <g opacity="0.57" transform="matrix(1,0,0,1,94.5,65.5)">
          <path
            d="M0,-1 C0,-1 0,1 0,1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
        <g opacity="0.57" transform="matrix(1,0,0,1,106.5,66.5)">
          <path
            d="M0,-9 C0,-9 0,9 0,9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
        <g opacity="0.57" transform="matrix(1,0,0,1,110.5,65.5)">
          <path
            d="M0,-4 C0,-4 0,4 0,4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
        <g opacity="0.57" transform="matrix(1,0,0,1,114.5,65.5)">
          <path
            d="M0,-1 C0,-1 0,1 0,1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
      </g>
    </svg>
  );
}

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      audio?.pause();
    };
  }, []);

  const handleToggle = async () => {
    setShowTooltip(false);

    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-toggle">
      {showTooltip ? (
        <div className="audio-toggle__tooltip">
          Turn audio on for a better experience.
        </div>
      ) : null}

      <button
        type="button"
        className={`audio-toggle__button ${
          isPlaying ? "audio-toggle__button--active" : ""
        }`}
        aria-label={isPlaying ? "Turn audio off" : "Turn audio on"}
        aria-pressed={isPlaying}
        onClick={() => {
          void handleToggle();
        }}
      >
        <span className="audio-toggle__icon">
          <AudioIcon />
        </span>
      </button>

      <audio
        ref={audioRef}
        src={AUDIO_SOURCE}
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
