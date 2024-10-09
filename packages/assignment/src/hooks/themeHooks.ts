import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../contexts/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};

export const useToggleTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useToggleTheme must be used within a ThemeProvider');
  }
  return context.toggleTheme;
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
