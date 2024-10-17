import { useContext } from "react";
import { ThemeContext } from "../context";

/**
 * @description ThemeContext를 반환하는 커스텀 훅입니다. ThemeProvider 내에서만 사용할 수 있습니다.
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within an ThemeProvider");
  }
  return context;
};
