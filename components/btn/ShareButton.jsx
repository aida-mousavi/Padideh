"use client";
import Image from "next/image";
import Share from "@/public/icon/share.svg";
import { useState } from "react";

export default function ShareButton({ link }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative flex">
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-center bg-white text-black text-xs px-2 py-1 rounded-md shadow w-[60px]">
          کپی شد!
        </span>
      )}

      <button
        onClick={copy}
        className="w-12 h-12 rounded-[20px] border-2 border-blue-secondary flex justify-center items-center"
      >
        <Image src={Share} alt="Share" />
      </button>
    </div>
  );
}
