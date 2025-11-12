import React from "react";

// react icons
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

type ModeLangProps = {
  mode: boolean;
  handleToggleMode: () => void;
};

export default function ModeLang({ mode, handleToggleMode }: ModeLangProps) {
  return (
    <div className="flex gap-2 p-1">
      {!mode ? (
        <MdDarkMode
          onClick={handleToggleMode}
          className="size-8 p-1   text-blue-400 duration-100 ease-in hover:cursor-pointer hover:text-blue-300  "
        />
      ) : (
        <MdLightMode
          onClick={handleToggleMode}
          className="size-8 p-1 text-amber-400  duration-100 ease-in hover:cursor-pointer hover:text-amber-300  "
        />
      )}
      <select
        className="px-2 transition-colors rounded-md bg-amber-50 dark:bg-gray-800 shadow-sm dark:shadow-gray-900  
                 focus:outline-none focus:ring-1 focus:ring-teal-400 cursor-pointer"
      >
        <option className="" value="en">
          EN
        </option>
        <option className="" value="ru">
          RU
        </option>
        <option className="" value="uz">
          UZ
        </option>
      </select>
    </div>
  );
}
