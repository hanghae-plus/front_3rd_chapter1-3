import { useState } from "react";
import { ThemeContextType } from "../../types";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const contextValue: ThemeContextType = {
        theme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
