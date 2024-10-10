import { useThemeContext } from "../../contexts/theme/useThemeContext";

export const ThemeContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useThemeContext();

    return <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}>{children}</div>;
};
