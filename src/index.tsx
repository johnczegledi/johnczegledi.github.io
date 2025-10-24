import './index.css';
import React from "react";
// 1. Import createRoot from 'react-dom/client'
import { createRoot } from "react-dom/client"; 
import { AppRouter } from "./AppRouter"; // Assuming AppRouter is the top component

// 2. Get the root element
const rootElement = document.getElementById("root");

// 3. Use createRoot to render the application
if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <AppRouter />
        </React.StrictMode>
    );
} else {
    // Optional: Safety check
    console.error('Root element #root not found.');
}