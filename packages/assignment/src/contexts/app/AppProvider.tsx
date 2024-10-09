import React, { useState, ReactNode } from 'react'
import AppContext, { AppContextType } from './AppContext'
import { User, Notification } from '../../types'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState<User | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>([])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const login = (email: string) => {
    setUser({ id: 1, name: '홍길동', email })
    addNotification('성공적으로 로그인되었습니다', 'success')
  }

  const logout = () => {
    setUser(null)
    addNotification('로그아웃되었습니다', 'info')
  }

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

  const contextValue: AppContextType = {
    theme,
    toggleTheme,
    user,
    login,
    logout,
    notifications,
    addNotification,
    removeNotification,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export default AppProvider
