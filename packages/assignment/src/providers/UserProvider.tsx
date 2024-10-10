import { ReactNode, useState } from "react";
import { useCallback, useMemo } from "../@lib";
import { User, UserContextType } from "../types";
import { UserContext } from "../context";
import { useNotificationContext } from "../hooks";

/**
 * @description 사용자(User) 정보를 관리하는 Provider입니다.
 * @param children - Provider로 감쌀 하위 컴포넌트들
 */
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { addNotification } = useNotificationContext();
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(
    (email: string) => {
      setUser({ id: 1, name: "홍길동", email });
      addNotification("성공적으로 로그인되었습니다", "success");
    },
    [setUser, addNotification]
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, [setUser, addNotification]);

  const userContextValue: UserContextType = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
