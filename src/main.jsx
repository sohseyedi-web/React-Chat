import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SocketProvider } from "./context/SocketProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <App />
        <Toaster />
      </SocketProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
