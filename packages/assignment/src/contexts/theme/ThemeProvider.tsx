import { useState } from "react";
import { ThemeContextType } from "../../types";
import { ThemeContext } from "./ThemeContext";
import { useCallback } from "../../@lib";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    const contextValue: ThemeContextType = {
        theme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
