import { PropsWithChildren, useState } from 'react';
import { useCallback, useMemo } from '../../@lib';
import ThemeContext from './ThemeContext';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const toggleTheme = useCallback(() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')), []);
  const value = useMemo<ThemeContextType>(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
