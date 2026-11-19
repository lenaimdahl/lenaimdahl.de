import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/Router";
import "./index.css";

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const applyTheme = () =>
  document.documentElement.classList.toggle("dark", darkQuery.matches);

applyTheme();
darkQuery.addEventListener("change", applyTheme);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
