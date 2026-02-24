import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BrandItems from "./pages/BrandItems.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:id" element={<BrandItems />} />
      </Routes>
    </>
  );
}

export default App;
