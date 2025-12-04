"use client";
import { useState } from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { about } from "@/public/utill/staticText";

const items = [
  {
    title: "ماموریت‌ های ما",
    body: `• راهکارهای نوآورانه در تولید پنل و کانال‌های پیش‌عایق
• ارتقای کیفیت تهویه مطبوع
• کاهش مصرف انرژی با عایق‌های پیشرفته`,
    image: "/image/aboutus-3.jpeg",
  },
  {
    title: "چشم انداز ما",
    body: "تبدیل شدن به مرجع ملی در صنعت تهویه و عایق.",
    image: "/image/aboutus-2.jpeg",
  },
  {
    title: "تکنولوژی‌های ما",
    body: "استفاده از مواد پیشرفته و فناوری‌های دقیق تولید.",
    image: "/image/about-us-1.jpeg",
  },
];

export default function AccordionWithImage() {
  const [open, setOpen] = useState(0); // تب اول باز باشد
  const [imgKey, setImgKey] = useState(0); // برای انیمیشن تغییر عکس

  const handleToggle = (index) => {
    setOpen(index);
    setImgKey((k) => k + 1); // تغییر کلید باعث اجرا شدن انیمیشن می‌شود
  };

  return (
    <div className="">

        <Title title={about.criteria} />
   
      <div className="w-full flex flex-col lg:flex-row gap-8 items-start  container-base md:container-xl my-16">
        {/* --- Accordion --- */}
        <div className="w-full lg:w-1/2 max-w-[600px]">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => handleToggle(i)}
                  className="w-full flex items-center justify-between py-4 px-3 lg:px-6 text-right">
                  <span className="font-semibold text-gray-800">
                    {it.title}
                  </span>

                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Body */}
                <div
                  className={`
                  overflow-hidden transition-all duration-300 text-sm text-gray-600
                  ${
                    isOpen
                      ? "max-h-[300px] opacity-100 py-3 px-6"
                      : "max-h-0 opacity-0 py-0 px-6"
                  }
                `}>
                  <div className="whitespace-pre-line">{it.body}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Image --- */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div
            key={imgKey}
            className="relative w-full max-w-[556px] h-[360px] rounded-3xl overflow-hidden
                     transition-all duration-500 opacity-0 translate-y-3 animate-[fadeInUp_.5s_forwards]">
            <Image
              src={items[open].image}
              fill
              alt="Accordion Image"
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
