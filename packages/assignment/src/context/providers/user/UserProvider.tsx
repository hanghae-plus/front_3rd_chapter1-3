import { useState } from "react";
import { useCallback, useMemo } from "@/@lib";
import { useNotificationContext } from "@/context/providers/notification/useNotificationContext";
import { UserContext, UserContextType } from "./UserContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: ThemeProviderProps) => {
  const { addNotification } = useNotificationContext();
  const [user, setUser] = useState<UserContextType["user"] | null>(null);

  const login = useCallback(
    (email: string) => {
      setUser({ id: 1, name: "홍길동", email });
      addNotification("성공적으로 로그인되었습니다", "success");
    },
    [addNotification]
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, [addNotification]);

  const values = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
