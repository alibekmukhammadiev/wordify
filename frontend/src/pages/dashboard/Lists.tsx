import React from "react";

export default function Lists() {
  return (
    <div className="flex flex-col w-sm gap-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className=" dark:bg-gray-700 bg-gray-200 text-black dark:text-white p-4 rounded-lg"
        >
          <span className="font-league-spartan font-semibold">
            List Item {i + 1}
          </span>
        </div>
      ))}
    </div>
  );
}
