import React, { useState } from "react";

// navigate function
import { useNavigate } from "react-router";

// react-icons
import { MdLanguage } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="px-4">
      <header className="flex items-center justify-between py-5">
        {/* Logo */}
        <div>
          <a href="#">
            <span className="font-league-spartan font-black text-xl">
              wordify.
            </span>
          </a>
        </div>
        {/* Navigations */}
        <ul className="list-none flex gap-5">
          <li>
            <a className="hover:text-gray-300 transition-colors" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300 transition-colors" href="#about">
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-300 transition-colors"
              href="#features"
            >
              Features
            </a>
          </li>
        </ul>
        {/* Modes */}
        <div className=" border-[1.5px] rounded-lg">

        <div className="flex gap-2 p-1">
          {false ? (
            <MdDarkMode className="size-7 p-0.5  bg-white text-blue-500 duration-100 ease-in hover:cursor-pointer  hover:bg-gray-300 rounded-sm" />
          ) : (
            <MdLightMode className="size-8 p-1 bg-white text-amber-500 duration-100 ease-in hover:cursor-pointer  hover:bg-gray-300 rounded-sm" />
          )}
          <MdLanguage className="size-8 p-1  text-blue-500 bg-white rounded-sm" />
        </div></div>

        {/* Buttons */}
        <div className="flex gap-5">
          <button
            className="text-gray-300 hover:cursor-pointer hover:text-gray-400 duration-100 ease-in"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="hover:cursor-pointer hover:text-gray-200 hover:bg-teal-600 bg-teal-500 duration-100 ease-in px-4.5 py-1.5 rounded-sm"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
}
