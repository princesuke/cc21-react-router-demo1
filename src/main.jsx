// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import browser router เข้ามา
// import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //ครอบ BrowserRoutes
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
  // </StrictMode>,
);
