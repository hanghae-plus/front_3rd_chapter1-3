import React, {useState} from 'react';
import ThemeContext from '../context/ThemeContext';
import {useCallback, useMemo} from '../@lib';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        // @ts-ignore
        <ThemeContext.Provider value={useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme])}>
            <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};