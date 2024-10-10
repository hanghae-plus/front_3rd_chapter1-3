import { createContext, useContext } from 'react';
import { Theme } from '../types';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeProvider 안에서 쓰기!');
  return context;
};
