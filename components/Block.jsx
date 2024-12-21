import { cn } from "@/utils/cn";
import React from "react";

export const Block = ({ value, onClick, opacity, highlight }) => (
  <div
    className={cn(
      "select-none rounded-2xl h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 m-0.5 overflow-hidden relative z-20 flex items-center justify-center",
      highlight
        ? "bg-green-300 dark:bg-green-700"
        : "bg-blue-100 dark:bg-slate-800",
      "border border-transparent dark:border-white/[0.2]",
      "transition-transform duration-200 ease-in-out", // Smooth transition for scaling
      "hover:scale-105" // Scale up on hover
    )}
    onClick={onClick}
    style={{ opacity }}
  >
    <span
      className={cn(
        "text-4xl select-none",
        highlight ? "text-black dark:text-white" : "text-black dark:text-neutral-300"
      )}
    >
      {value}
    </span>
  </div>
);
