import { createContext, FC, PropsWithChildren, useState } from 'react'
import { useCallback } from '@/@lib'
import { THEME } from '@/constants'

type ThemeType = (typeof THEME)[keyof typeof THEME]

interface ThemeContextType {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(THEME.LIGHT)

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))
  }, [])

  const contextValue = {
    theme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
