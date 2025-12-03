import React from "react";

export default function Lists() {
  return (
    <div className="flex flex-col w-sm gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-1 transition-all hover:cursor-pointer hover:outline-teal-600 hover:outline-2 dark:bg-gray-700 hover:opacity-85 bg-gray-200 text-black dark:text-white p-4 rounded-lg"
        >
          <span className="font-league-spartan font-bold text-xl sm:text-2xl">
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
