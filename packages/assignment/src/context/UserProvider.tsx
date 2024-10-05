import { createContext, useState } from "react";
import { useCallback, useMemo } from "../@lib";
import { useNotificationContext } from "./hooks";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: ThemeProviderProps) => {
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

  const values = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
