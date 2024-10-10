import { PropsWithChildren, useState } from 'react';
import { createContext, useCallback, useMemo } from '../@lib';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const [ThemeContextProvider, useThemeContext] = createContext<IThemeContext>({ name: 'Theme' });

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return <ThemeContextProvider value={contextValue}>{children}</ThemeContextProvider>;
};

export { useThemeContext, ThemeProvider };
