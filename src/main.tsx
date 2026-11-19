import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/Router";
import "./index.css";

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
