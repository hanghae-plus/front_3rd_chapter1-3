import { PropsWithChildren, useState } from "react";
import { useCallback, useMemo } from "../../@lib";
import { User, UserContext } from "../context/UserContext";
import { useNotification } from "../hooks/useNotificationContext";

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { addNotification } = useNotification();
  const [user, setUser] = useState<User | null>(null);
  const login = useCallback(
    (name: string, email: string) => {
      setUser({ name, email });
      addNotification("로그인되었습니다", "success");
    },
    [addNotification]
  );
  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "success");
  }, [addNotification]);
  //   const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
