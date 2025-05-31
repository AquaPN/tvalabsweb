"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Loader.css";
import rocketImg from "@/public/rocket.png"; // or .ico, whichever you prefer
import Image from "next/image";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [launching, setLaunching] = useState(false);
  const rocketRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { 
          clearInterval(interval);
          setLaunching(true);
          setTimeout(() => {
            onFinish(); // triggers the main page reveal
          }, 1000); // wait for rocket launch animation
          return 100;
        }
        return prev + 1;
      });
    }, 20); // adjust speed as needed
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loader-overlay ${launching ? "fade-out" : ""}`}>
      <div className="loader-circle">
        <svg className="progress-ring" width="160" height="160">
          <circle
            className="progress-ring__circle"
            stroke="#1c8d14"
            strokeWidth="8"
            fill="transparent"
            r="70"
            cx="80"
            cy="80"
            style={{
              strokeDasharray: 440,
              strokeDashoffset: 440 - (440 * progress) / 100,
            }}
          />
        </svg>
        <div
          className={`rocket-wrapper ${launching ? "launch" : ""}`}
          ref={rocketRef}
        >
          <Image src={rocketImg} alt="Rocket" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
