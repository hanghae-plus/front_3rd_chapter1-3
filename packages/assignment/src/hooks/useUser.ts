import { useContext } from "react"
import { UserContext } from "../context"

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("useUser 는 UserContext 내부에서 사용되어야 합니다.")
  }

  return context
}
