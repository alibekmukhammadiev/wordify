import React, { useState } from "react";

// react icon
import { FaThList } from "react-icons/fa";
import { IoPieChart } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

// dashboard pages
import Lists from "./dashboard/Lists";
import Settings from "./dashboard/Settings";
import Statistics from "./dashboard/Statistics";

export default function UserDashboard() {
  const [activePage, setActivePage] = useState<string>("lists");
  return (
    <div className="h-screen flex flex-col-reverse sm:flex-row justify-center text-white">
      {/* Sidebar */}
      <aside className="sm:w-20 sm:border-r-2 sm:border-l-2 sm:border-gray-800/20 dark:sm:border-gray-800  flex sm:flex-col justify-around sm:justify-start items-center py-4 sm:py-6 sm:gap-6">
        <div className="p-3 bg-teal-600 rounded-lg">
          <h1 className="font-league-spartan font-black sm:text-xl italic">
            W.
          </h1>
        </div>

        <button
          onClick={() => setActivePage("lists")}
          className={`hover:cursor-pointer text-gray-700 dark:text-white  ${
            activePage === "lists"
              ? " transition-all duration-100 outline-2 outline-teal-600 bg-amber-100 dark:bg-gray-700 dark:hover:bg-gray-700"
              : ""
          }  p-3 rounded-lg`}
        >
          <FaThList className="size-5 sm:size-6" />
        </button>

        <button
          onClick={() => setActivePage("statistics")}
          className={`hover:cursor-pointer text-gray-700 dark:text-white   ${
            activePage === "statistics"
              ? " transition-all duration-100 outline-2 outline-teal-600 bg-amber-100 dark:bg-gray-700 dark:hover:bg-gray-700"
              : ""
          }  p-3 rounded-lg`}
        >
          <IoPieChart className="size-5 sm:size-6" />
        </button>

        <button
          onClick={() => setActivePage("settings")}
          className={`hover:cursor-pointer text-gray-700 dark:text-white  ${
            activePage === "settings"
              ? " transition-all duration-100 outline-2 bg-amber-100 outline-teal-600 dark:bg-gray-700 dark:hover:bg-gray-700"
              : ""
          }  p-3 rounded-lg`}
        >
          <IoSettingsSharp className="size-5 sm:size-6" />
        </button>
      </aside>

      {/* Main Content */}
      <section className="flex justify-center w-full sm:w-98  h-screen overflow-y-auto scrollbar scrollbar-thumb-teal-600 scrollbar-track-gray-900  p-0 py-6 px-3 sm:p-6">
        {activePage === "lists" && <Lists />}
        {activePage === "statistics" && <Statistics />}
        {activePage === "settings" && <Settings />}
      </section>
    </div>
  );
}
