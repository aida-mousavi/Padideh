"use client";
import { useRef, useState } from "react";
import PlayBtn from "@/public/icon/play-button.svg";
import Image from "next/image";

export default function LazyVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    // ست کردن src و شروع پخش ویدیو
    videoRef.current.src = "/video/padide.mp4";
    videoRef.current.load();
    videoRef.current.play();

    setIsPlaying(true); // حذف آیکون
  };

  return (
    <div className="container-base md:container-xl max-w-6xl h-[580px] mx-auto relative">
      {/* Play Button */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 md:w-20"
        >
          <Image src={PlayBtn} alt="Play Button" />
        </button>
      )}

      <video
        ref={videoRef}
        controls
        preload="none"
        poster="/image/Exhibition.png"
        className="w-full h-full object-cover rounded-xl shadow-md"
      />
    </div>
  );
}
