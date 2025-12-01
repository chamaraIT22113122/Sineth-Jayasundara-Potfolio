import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

function mount() {
  const el = document.getElementById("root");
  if (!el) {
    console.error("No #root found. HTML served was:", document.documentElement.outerHTML.slice(0, 400));
    return;
  }
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}

// Module scripts are deferred, but this guarantees order even if HTML is wrong
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
document.body.style.backgroundColor = '#121212';
 document.body.style.background = 'radial-gradient(1200px 700px at 50% 0%, rgba(34,211,238,0.12), rgba(34,211,238,0.08) 40%, transparent 70%), linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)'
               


