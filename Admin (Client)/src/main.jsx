import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import App from "./App";
import router from "./router";

axios.defaults.baseURL = "https://server-hotel.onrender.com";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Reac - Query */}
    <QueryClientProvider client={queryClient}>
      {/* React-router-dom */}
      {/* <App router={router} /> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
