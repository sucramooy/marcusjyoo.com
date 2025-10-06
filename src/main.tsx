// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PCBrulePage from "./components/PCBrulePage"; // adjust path if file is in src/pages/PCBrulePage
import "./index.css";
import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        {/* root / keeps your existing App component */}
        <Route path="/" element={<App />} />

        {/* direct route for /pcbrule */}
        <Route path="/pcbrule" element={<PCBrulePage />} />

        {/* optional: fallback to App for unknown routes so your site doesn't 404
            (or create a NotFound component and point "*" to it) */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);