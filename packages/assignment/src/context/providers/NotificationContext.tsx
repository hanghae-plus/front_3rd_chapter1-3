import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'
import { useCallback, useMemo, useRef } from '@/@lib'
import { STATUS } from '@/constants'

type messageType = (typeof STATUS)[keyof typeof STATUS]

interface NotificationType {
  id: number
  message: string
  type: messageType
}

interface NotificationContextType {
  notifications: NotificationType[]
  addNotification: (message: string, type: NotificationType['type']) => void
  removeNotification: (id: number) => void
}

export const NotificationContext = createContext<NotificationContextType | null>(null)

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([])
  const timersRef = useRef<{ [key: number]: number }>({})

  const addNotification = useCallback((message: string, type: NotificationType['type']) => {
    const newNotification: NotificationType = {
      id: Date.now(),
      message,
      type,
    }

    setNotifications((prev) => [...prev, newNotification])

    const timerId = window.setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== newNotification.id))
      delete timersRef.current[newNotification.id]
    }, 2000)

    timersRef.current[newNotification.id] = timerId
  }, [])

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id])
      delete timersRef.current[id]
    }
  }, [])

  useEffect(() => {
    const currentTimers = { ...timersRef.current }
    return () => {
      Object.values(currentTimers).forEach((timer) => clearTimeout(timer))
    }
  }, [])

  const contextValue = useMemo(
    () => ({ notifications, addNotification, removeNotification }),
    [notifications, addNotification, removeNotification]
  )

  return <NotificationContext.Provider value={contextValue}>{children}</NotificationContext.Provider>
}
