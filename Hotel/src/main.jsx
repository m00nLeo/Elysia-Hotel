import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import App from "./App";

// Config baseURL for axios (page URL)
axios.defaults.baseURL = "https://server-hotel.onrender.com";

// Create a query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Reac - Query */}
    <QueryClientProvider client={queryClient}>
      {/* React-router-dom */}
      {/* <RouterProvider router={router} /> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
