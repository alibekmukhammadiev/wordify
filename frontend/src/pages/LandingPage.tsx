import React from "react";
import logo from "../assets/logo.png";

export default function LandingPage() {
  return (
    <div>
      <header className="flex">
        <div>
          <a href="#">
            <img src={logo} alt="Company Logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
        </ul>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </div>
  );
}
