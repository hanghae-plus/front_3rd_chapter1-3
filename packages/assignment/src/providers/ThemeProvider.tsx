import { PropsWithChildren, useState } from "react";
import { Theme } from "../types";
import { useCallback, useMemo } from "../@lib";
import { ThemeContext } from "../context";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("light");
	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}, []);
	const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
	return (
		<ThemeContext.Provider value={value}>
			<div
				className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
