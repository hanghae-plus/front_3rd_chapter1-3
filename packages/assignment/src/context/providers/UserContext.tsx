import { createContext, FC, PropsWithChildren, useState } from 'react'
import { useCallback, useMemo } from '@/@lib'
import { useNotificationContext } from '@/context/hooks'
import { STATUS } from '@/constants'

interface UserType {
  id: number
  name: string
  email: string
}

interface UserContextType {
  user: UserType | null
  login: (name: string, email: string, password?: string) => void
  logout: () => void
}

const USER_ID = 1
const LOGIN_MESSAGE = '성공적으로 로그인되었습니다'
const LOGOUT_MESSAGE = '로그아웃되었습니다'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null)
  const { addNotification } = useNotificationContext()

  const login = useCallback(
    (name: string, email: string) => {
      // password를 사용하지 않고 무조건 로그인 성공으로 가정
      setUser({ id: USER_ID, name, email })
      addNotification(LOGIN_MESSAGE, STATUS.SUCCESS)
    },
    [addNotification]
  )

  const logout = useCallback(() => {
    setUser(null)
    addNotification(LOGOUT_MESSAGE, STATUS.INFO)
  }, [addNotification])

  const contextValue = useMemo(() => ({ user, login, logout }), [user, login, logout])

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
