import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import appRouter from "@/pages/router.jsx";
import App from "@/pages/App";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </StrictMode>
);
