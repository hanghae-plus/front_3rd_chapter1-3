import { useContext } from "react"
import { ThemeContext } from "../context"

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme 는 ThemeContext 내부에서 사용되어야 합니다.")
  }

  return context
}
