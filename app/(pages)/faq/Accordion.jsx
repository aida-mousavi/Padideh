"use client";

import { useState, useRef, useEffect } from "react";

export default function Accordion({ items = [], allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="w-full md:px-10  mx-auto space-y-3">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
          {...item}
        />
      ))}
    </div>
  );
}

function AccordionItem({ id, title, content, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      setHeight(el.scrollHeight + "px");
      const t = setTimeout(() => setHeight("auto"), 300);
      return () => clearTimeout(t);
    } else {
      if (height === "auto") {
        setHeight(el.scrollHeight + "px");
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setHeight("0px"))
        );
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen]);

  return (
    <div className=" border border-gray-active rounded-2xl  overflow-hidden text-">
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-slate-800 text-sm md:text-base">{title}</span>

        <svg
          className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{ height, transition: "height 300ms ease" }}
        className="px-5 overflow-hidden"
      >
        <div className="py-4 text-xs md:text-sm text-slate-600">{content}</div>
      </div>
    </div>
  );
}
