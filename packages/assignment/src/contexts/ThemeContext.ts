import { createContext } from "react";
import { Theme_e } from "../models/Theme";

interface ThemeContextType {
  theme: Theme_e;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";
