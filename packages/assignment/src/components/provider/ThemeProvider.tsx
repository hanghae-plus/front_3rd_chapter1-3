import { PropsWithChildren, useState, useCallback, useMemo } from "react";
import { Theme } from "../../types";
import { ThemeContext } from "../../contexts";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`min-h-screen ${
          theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
