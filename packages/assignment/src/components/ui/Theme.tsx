import React from 'react';
import { useTheme } from '../../hooks';

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
      }`}
    >
      {children}
    </div>
  );
};

export default Theme;
