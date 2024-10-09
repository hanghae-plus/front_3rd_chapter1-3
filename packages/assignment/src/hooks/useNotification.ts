import { useContext } from "react"
import { NotificationContext } from "../context"

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error("useNotification 는 NotificationProvider 내부에서 사용되어야 합니다.")
  }
  return context
}
