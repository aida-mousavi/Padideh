"use client";
import { useEffect, useRef } from "react";

export default function AnimatedLine({ duration = 1200, delay = 100,customClass }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const length = p.getTotalLength();
    p.style.strokeDasharray = length;
    p.style.strokeDashoffset = -length; 
    p.style.setProperty("--dash-start", `${-length}`);

    
    p.style.animation = `drawFromRightStroke ${duration}ms cubic-bezier(.22,.9,.33,1) ${delay}ms forwards`;
  }, [duration, delay]);

  return (
    <div className={`  flex items-center absolute z-10 ${customClass}`}>
      <svg  viewBox="0 0 900 60" className="w-[300px] h-16 overflow-visible">
        <g style={{ transformBox: "fill-box" }}>
          <path
            ref={pathRef}
            d="M150 80 H360 C380 80 400 16 420 16 H750"
            fill="none"
            stroke="#2b6ef6ba"
            strokeWidth="7"
            className="draw-stroke drop-shadow-[0_2px_10px_rgba(62,110,197,1)]"
          />
        </g>
      </svg>
    </div>
  );
}
