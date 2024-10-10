import { useCallback, useState } from "react";
import { ThemeContext } from "../store/ThemeContext";

type Props = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
