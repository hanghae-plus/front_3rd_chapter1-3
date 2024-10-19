import { ReactNode, useState } from "react"
import { UserContext } from "../context"
import { useMemo } from "../@lib"
import { User } from "../types"
import { useNotification } from "../hooks"

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const { addNotification } = useNotification()

  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email })
    addNotification("성공적으로 로그인되었습니다", "success")
  }

  const logout = () => {
    setUser(null)
    addNotification("로그아웃되었습니다", "info")
  }

  const userValue = useMemo(() => ({ user, login, logout }), [user])

  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
}
