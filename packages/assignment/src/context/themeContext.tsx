import React, {createContext, PropsWithChildren, useContext, useState} from "react";
import {Theme, ThemeContextType} from "../types.ts";
import {useCallback, useMemo} from "../@lib";

export const ThemeContext = createContext<ThemeContextType | null>(null);


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);
    const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
