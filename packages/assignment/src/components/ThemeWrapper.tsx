import React from 'react';
import { useTheme } from '../contexts';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'
      }`}
    >
      {children}
    </div>
  );
}
