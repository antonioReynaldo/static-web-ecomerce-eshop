import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: false,
  mirror: true,
  duration: 700,
  easing: "ease-out",
  offset: 100,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
