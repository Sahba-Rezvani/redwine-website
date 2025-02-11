import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SignUpPage from "./components/SignUpPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
