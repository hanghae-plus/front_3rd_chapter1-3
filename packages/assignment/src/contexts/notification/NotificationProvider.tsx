import React, { useState, ReactNode } from 'react'
import {
  NotificationContext,
  NotificationContextType,
} from './NotificationContext'
import { Notification } from '../../types'

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (message: string, type: Notification['type']) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    }
    setNotifications((prev) => [...prev, newNotification])
  }

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    )
  }

  const contextValue: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
  }

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  )
}
