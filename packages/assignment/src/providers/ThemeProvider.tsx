import React, { useState, createContext, useContext } from "react";
import { useCallback } from "../@lib";
import { useMemo } from "../@lib";

interface ThemeContextType {
  theme: "dark" | "light";
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

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

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

export default ThemeProvider;
