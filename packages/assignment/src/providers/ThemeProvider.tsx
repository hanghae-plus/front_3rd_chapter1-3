import { PropsWithChildren, useState } from "react";
import { useCallback, useMemo } from "../@lib";
import { Theme_e } from "../models/Theme";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme_e>(Theme_e.light);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === Theme_e.light ? Theme_e.dark : Theme_e.light));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
