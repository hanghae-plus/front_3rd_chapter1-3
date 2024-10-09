import { ReactNode } from 'react';
import useTheme from '../../hooks/useTheme';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}
    >
      {children}
    </div>
  );
};

export default DefaultLayout;
