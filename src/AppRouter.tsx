//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";

export function AppRouter() {
  return (
    <BrowserRouter 
      future={{ 
        // Opt-in to React Router v7 state update wrapping (recommended performance change)
        v7_startTransition: true, 
        // Opt-in to React Router v7 relative path resolution (to clean up console warning)
        v7_relativeSplatPath: true 
      }}
    >
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}