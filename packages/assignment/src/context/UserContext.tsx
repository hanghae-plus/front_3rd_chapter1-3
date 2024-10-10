import React, {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from 'react'
import { useCallback, useMemo } from '../@lib/hooks'
import { useNotification } from './NotificationContext'

interface User {
  id: number
  name: string
  email: string
}

interface UserContextType {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
}

const UserContext = createContext<UserContextType | null>(null)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const notificationContext = useNotification()
  if (!notificationContext) {
    throw new Error('NotificationProvider is missing')
  }
  const { addNotification } = notificationContext

  const login = useCallback(
    (email: string) => {
      setUser({ id: 1, name: '홍길동', email })
      addNotification('성공적으로 로그인되었습니다', 'success')
    },
    [addNotification]
  )

  const logout = useCallback(() => {
    setUser(null)
    addNotification('로그아웃되었습니다', 'info')
  }, [addNotification])

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
