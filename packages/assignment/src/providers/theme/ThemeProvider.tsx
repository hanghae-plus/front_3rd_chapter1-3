import React, { useState, createContext, useContext } from "react";
import { useMemo } from "@/@lib/hooks/useMemo";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within an AppProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: React.ReactNode) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeValue: ThemeContextType = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
