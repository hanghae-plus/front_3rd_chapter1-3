import { PropsWithChildren } from 'react';
import { useAppContext } from '../@lib/context';

export const ThemeContainer = ({ children }: PropsWithChildren) => {
  const { theme } = useAppContext();

  return (
    <div
      className={`min-h-screen ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'
      }`}
    >
      {children}
    </div>
  );
};
