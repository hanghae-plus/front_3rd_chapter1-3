import React from 'react';
import { useThemeClient } from '../provider/ThemeProvider';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemeClient();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
