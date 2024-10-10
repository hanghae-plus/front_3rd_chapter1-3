import { createContext, useMemo, useState } from "react";
import { useCallback } from "../@lib";
import { useNotificationContext } from "../hooks";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface IUserContext {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Create Context
export const UserContext = createContext<IUserContext | undefined>(undefined);

// Provider
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { addNotification } = useNotificationContext();
  const [user, setUser] = useState<User | null>(null);

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

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
