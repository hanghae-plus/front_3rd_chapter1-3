import { useState, createContext, useContext } from "react";
import { useCallback } from "@/@lib/hooks/useCallback";
import { useMemo } from "@/@lib/hooks/useMemo";
import { useNotificationContext } from "@/providers/notification/NotificationProvider";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within an AppProvider");
  }
  return context;
};

export const UserProvider = ({ children }: React.ReactNode) => {
  const [user, setUser] = useState<User | null>(null);

  const { addNotification } = useNotificationContext();

  const login = useCallback((email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, []);

  const userValue: UserContextType = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};
