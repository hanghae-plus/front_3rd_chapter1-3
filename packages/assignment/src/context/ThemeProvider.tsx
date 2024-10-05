import { createContext, useState } from "react";
import { useCallback, useMemo } from "../@lib";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const values = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={values}>
      <div
        className={`min-h-screen ${
          values.theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
