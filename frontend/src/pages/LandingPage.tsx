import React, { useState } from "react";

// component
import ModeLang from "../components/ModeLang";
// image
import hero from "../assets/hero.png";

// navigate function
import { useNavigate } from "react-router";

// react-icons
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function LandingPage() {
  const [mode, setMode] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(true);

  // useNavigate
  const navigate = useNavigate();

  // toggle mode
  const handleToggleMode = function () {
    setMode((prev) => !prev);
  };

  // toggle modal
  const handleToggleModal = function () {
    setModal((prev) => !prev);
  };
  return (
    <div>
      <header className="flex items-center justify-between py-7">
        {/* Logo */}
        <div>
          <a href="#">
            <span className="font-league-spartan font-black text-xl">
              Wordify.
            </span>
          </a>
        </div>
        {/* Navigations */}
        <ul className="list-none hidden gap-5 sm:flex">
          <li>
            <a
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              href="#features"
            >
              Features
            </a>
          </li>
        </ul>
        {/* Modes */}
        <div className="hidden sm:block rounded-lg">
          <ModeLang handleToggleMode={handleToggleMode} mode={mode} />
        </div>

        {/* Buttons */}
        <div className="hidden sm:flex gap-5">
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 hover:cursor-pointer dark:hover:text-gray-400 duration-100 ease-in"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="text-white hover:cursor-pointer hover:bg-teal-700 bg-teal-600 duration-100 ease-in px-4.5 py-1.5 rounded-sm"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
        {/* mobile screen navbar */}
        <div className="flex items-center gap-5 sm:hidden">
          <ModeLang handleToggleMode={handleToggleMode} mode={mode} />
          {!modal ? (
            <AiOutlineClose
              onClick={handleToggleModal}
              className="block sm:hidden size-8 p-1.5  bg-amber-100 hover:bg-amber-200 duration-100 ease-in hover:cursor-pointer  rounded-md  dark:bg-gray-700  shadow-sm dark:shadow-gray-900"
            />
          ) : (
            <RiMenu3Line
              onClick={handleToggleModal}
              className="block sm:hidden size-8 p-1.5 bg-amber-100 hover:bg-amber-200 duration-100 ease-in hover:cursor-pointer  rounded-md  dark:bg-gray-700  shadow-sm dark:shadow-gray-900"
            />
          )}
        </div>
      </header>
      {/* hero section start */}
      <section className="relative flex flex-col-reverse gap-5 sm:gap-0 sm:flex-row py-10">
        {/* modal navbar start */}
        {!modal && (
          <div className="w-1/2 absolute right-0 top-0 z-1 bg-amber-100 dark:bg-gray-700 shadow-lg shadow-gray-500 dark:shadow-gray-900">
            <ul className="flex flex-col  list-none py-5">
              <a href="#home">
                <li className="transition-colors text-white bg-teal-600 px-7 py-3">
                  Home
                </li>
              </a>

              <a href="#home">
                <li className="transition-colors hover:bg-teal-600 px-7 py-3">
                  About
                </li>
              </a>
              <a href="#home">
                <li className="transition-colors hover:bg-teal-600 px-7 py-3">
                  Features
                </li>
              </a>
            </ul>
          </div>
        )}

        {/* modal navbar end */}
        <div className="flex  flex-col justify-center items-center sm:items-start gap-8 sm:w-1/2">
          <h1 className="font-league-spartan font-bold text-5xl text-center sm:text-left sm:text-6xl">
            This is the Header
          </h1>
          <p className="text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nisi nesciunt aspernatur aliquam nemo numquam optio ea praesentium!
            Commodi, tempore?
          </p>
          <button
            onClick={() => navigate("/register")}
            className="text-white hover:cursor-pointer hover:text-gray-200 hover:bg-amber-700 bg-amber-600 duration-100 ease-in px-4.5 py-1.5 rounded-sm"
          >
            Get Started
          </button>
        </div>
        <div className="self-center w-2/3 sm:w-1/2">
          <img src={hero} alt="Hero Section Image" />
        </div>
      </section>
      {/* hero section end */}
    </div>
  );
}
