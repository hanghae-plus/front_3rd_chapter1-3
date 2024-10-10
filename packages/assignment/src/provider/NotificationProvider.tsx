import { ReactNode, useState } from "react"
import { NotificationContext } from "../context"
import { Notification } from "../types"
import { useMemo } from "../@lib"

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (message: string, type: Notification["type"]) => {
    const newNotification: Notification = { id: Date.now(), message, type }
    setNotifications((prev) => [...prev, newNotification])
  }
  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const notificationValue = useMemo(() => ({ notifications, addNotification, removeNotification }), [notifications])

  return <NotificationContext.Provider value={notificationValue}>{children}</NotificationContext.Provider>
}
