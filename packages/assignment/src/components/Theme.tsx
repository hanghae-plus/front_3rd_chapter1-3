import { ReactNode } from "react"
import { useTheme } from "../hooks"

export const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}>{children}</div>
  )
}
