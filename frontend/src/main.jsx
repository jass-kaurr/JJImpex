import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BrandItems from "./pages/BrandItems.jsx";
import Faq from "./pages/Faq.jsx";
import AboutUs from "./pages/AboutUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brand/:brandId" element={<BrandItems />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);
