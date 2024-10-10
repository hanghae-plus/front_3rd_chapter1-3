import { PropsWithChildren, useState } from "react";
import { useCallback, useMemo } from "../@lib";
import { useSafeContext } from "../hooks/useSafeContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { User } from "../models/User";
import { UserContext } from "../contexts/UserContext";
import { NotificationType_e } from "../models/Notification";

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useSafeContext(NotificationContext);

  const login = useCallback((email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", NotificationType_e.success);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", NotificationType_e.info);
  }, []);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
