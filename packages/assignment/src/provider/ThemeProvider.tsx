import { ReactNode, useState } from "react"
import { ThemeContext } from "../context"
import { useMemo } from "../@lib"
import { Theme } from "../types"

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme])

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
}
