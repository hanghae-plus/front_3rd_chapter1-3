import React, { useState } from 'react';
import { ThemeContextType } from '../../types';
import { useCallback, useMemo } from '../../@lib';
import { ThemeContext } from '../../contexts/ThemeContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const themeContextValue: ThemeContextType = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div
        className={`min-h-screen ${
          theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
