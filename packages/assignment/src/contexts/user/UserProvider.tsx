import React, { useState, ReactNode } from 'react'
import { UserContext, UserContextType } from './UserContext'
import { useNotificationContext } from '../notification'
import { User } from '../../types'

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const { addNotification } = useNotificationContext()

  const login = (email: string) => {
    setUser({ id: 1, name: '홍길동', email })
    addNotification('성공적으로 로그인되었습니다', 'success')
  }

  const logout = () => {
    setUser(null)
    addNotification('로그아웃되었습니다', 'info')
  }

  const contextValue: UserContextType = {
    user,
    login,
    logout,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
