import React from "react";
import { useTheme } from "../hooks";
import { Header, NotificationSystem } from "./index";
import { LayoutProps } from "../types";

export const Layout: React.FC<LayoutProps> = React.memo(({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
      }`}
    >
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">{children}</div>
      </div>
      <NotificationSystem />
    </div>
  );
});
