import React, { useState, ReactNode } from 'react';
import ThemeContext from '../context/ThemeContext'
import { ThemeType } from '../types/type';
import { useMemo } from '../@lib/hooks/useMemo'

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};