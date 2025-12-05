import React from "react";

export default function Lists() {
  return (
    <div className="flex flex-col w-sm gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-1 transition-all hover:cursor-pointer hover:translate-x-0.5  hover:opacity-85   dark:text-white bg-white/80 dark:bg-gray-800/80 
                   backdrop-blur-md border border-gray-200 dark:border-gray-700
                   rounded-2xl shadow-lg  p-4"
        >
          <span className="font-league-spartan font-bold text-xl sm:text-2xl text-gray-700 dark:text-white/80">
            List Item {i + 1}
          </span>
          <div className="self-end">
            <span className="text-gray-300 italic">
              <b>30</b> words
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
