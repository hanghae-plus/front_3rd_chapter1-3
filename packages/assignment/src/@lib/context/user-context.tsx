import { createContext, PropsWithChildren, useState } from "react";
import { useContextHook } from "./useContextHook";
import { NotificationContext } from "./notification-context";

export interface UserType {
  id: number;
  name: string;
  email: string;
}

export interface UserContextType {
  user: UserType | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserContextType["user"] | null>(null);
  const { addNotification } = useContextHook({
    context: NotificationContext,
    name: "Notification",
  });

  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  };

  const logout = () => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};
