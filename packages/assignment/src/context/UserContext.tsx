// context/UserContext.tsx
import React, { createContext, useState } from "react";
import { User } from "../models";
import { useNotification } from "../@lib/hooks/useNotification";
import { useCallback, useMemo } from "../@lib";

interface UserContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { addNotification } = useNotification();
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(
    (email: string) => {
      setUser({ id: 1, name: email, email });
      addNotification(`${email}님 환영합니다 !`, "info");
    },
    [addNotification]
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃 되었어요!", "info");
  }, [addNotification]);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
