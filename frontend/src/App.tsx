import React from "react";
import { Routes, Route } from "react-router";

// import pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <div className="max-w-4xl mx-auto my-5 px-4 bg-amber-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
