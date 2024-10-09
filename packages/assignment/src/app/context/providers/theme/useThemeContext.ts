import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext는 ThemeProvider 내부에서 사용해야 합니다."
    );
  }
  return context;
};
