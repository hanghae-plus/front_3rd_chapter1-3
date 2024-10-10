import React, { useState, ReactNode } from "react";
import { useMemo, useCallback } from "../@lib";
import { ThemeContextType } from "../types";
import { ThemeContext } from "../context";

/**
 * @description 애플리케이션 전역에서 사용할 테마(light/dark)를 관리하는 Provider입니다.
 * @param children - Provider로 감쌀 하위 컴포넌트들
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const themeContextValue: ThemeContextType = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
