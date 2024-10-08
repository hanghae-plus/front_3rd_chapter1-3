import React, { createContext, ReactNode, useContext, useState } from "react";
import { useCallback } from "../@lib";
import { User } from "../types";

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    // addNotification("성공적으로 로그인되었습니다", "success");
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    // addNotification("로그아웃되었습니다", "info");
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error("useUser must be used within a UserProvider");

  return context;
};
