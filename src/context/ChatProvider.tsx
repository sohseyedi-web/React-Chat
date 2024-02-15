import React from "react";
import { SocketProvider } from "./SocketProvider";
import { ThemeProvider } from "./ThemeProvider";

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SocketProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SocketProvider>
  );
};

export default ChatProvider;
