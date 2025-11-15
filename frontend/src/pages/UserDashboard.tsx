import React from "react";

// react icon
import { FaThList } from "react-icons/fa";
import { IoPieChart } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

export default function UserDashboard() {
  return (
    <div className="h-screen flex justify-center text-white">
      {/* Sidebar */}
      <aside className="w-20 border-r-2 border-gray-700 flex flex-col items-center py-6 gap-6">
        <div className="p-3 bg-teal-600 rounded-lg">
          <h1 className="font-league-spartan font-black text-xl">W.</h1>
        </div>

        <a
          href="#"
          className="dark:hover:bg-gray-700 transition-colors p-3 rounded-lg"
        >
          <FaThList className="size-6" />
        </a>

        <a
          href="#"
          className="dark:hover:bg-gray-700 transition-colors p-3 rounded-lg"
        >
          <IoPieChart className="size-6" />
        </a>

        <a
          href="#"
          className="dark:hover:bg-gray-700 transition-colors p-3 rounded-lg"
        >
          <IoSettingsSharp className="size-6" />
        </a>
      </aside>

      {/* Main Content */}
      <section className="flex  h-screen overflow-y-scroll scrollbar scrollbar-thumb-teal-600 scrollbar-track-gray-900   p-6">
        <div className="flex  flex-col gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-96 dark:bg-gray-700 bg-gray-200 text-black dark:text-white p-4 rounded-lg"
            >
              <span className="font-league-spartan font-semibold">
                List Item {i + 1}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
