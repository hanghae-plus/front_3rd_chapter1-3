import { PropsWithChildren } from 'react';
import { useThemeContext } from '../contexts/ThemeProvider';

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
      {children}
    </div>
  );
};
