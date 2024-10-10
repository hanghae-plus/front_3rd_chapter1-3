import { createContext, useState } from "react";
import { useCallback, useMemo } from "../@lib";

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

// Create Context
export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

// Provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
