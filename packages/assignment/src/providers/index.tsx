import React from "react";
import NotificationProvider from "./NotificationProvider";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";

const RootProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NotificationProvider>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </NotificationProvider>
  );
};

export default RootProvider;
