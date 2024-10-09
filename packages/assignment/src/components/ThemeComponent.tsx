import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
      {children}
    </div>
  );
};
