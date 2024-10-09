import React, { ReactNode } from "react";
import { useApp } from "../context";

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useApp();
  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
      }`}
    >
      {children}
    </div>
  );
};
