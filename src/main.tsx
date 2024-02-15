import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ChatProvider from "./context/ChatProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChatProvider>
        <App />
        <Toaster />
      </ChatProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
