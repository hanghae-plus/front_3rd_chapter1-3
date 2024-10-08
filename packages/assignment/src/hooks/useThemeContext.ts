import { createContext, useContext } from "react";
import { ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// 커스텀 훅: useAppContext
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within an ThemeProvider");
  }
  return context;
};
