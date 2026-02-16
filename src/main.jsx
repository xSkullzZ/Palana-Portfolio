import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const computedBase =
  import.meta.env.DEV && window.location.pathname.startsWith("/Palana-Portfolio/")
    ? "/Palana-Portfolio"
    : import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={computedBase}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
