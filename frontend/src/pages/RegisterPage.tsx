import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-amber-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Logo / Title */}
      <div className="w-full flex justify-center max-w-md">
        <h1 className="font-bold text-5xl py-5">Wordify.</h1>
      </div>

      {/* Register Card */}
      <div
        className="w-full max-w-md 
                   bg-white/80 dark:bg-gray-800/80 
                   backdrop-blur-md border border-gray-200 dark:border-gray-700
                   rounded-2xl shadow-lg p-8 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-left mb-6 text-gray-800 dark:text-white font-[var(--font-league-spartan)]">
         Register
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                         bg-white/70 dark:bg-gray-900/70 
                         text-gray-800 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                         bg-white/70 dark:bg-gray-900/70 
                         text-gray-800 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                         bg-white/70 dark:bg-gray-900/70 
                         text-gray-800 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:cursor-pointer hover:bg-amber-700 
                       text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-5">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-amber-600 dark:text-amber-400 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

