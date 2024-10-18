import React, { createContext, useContext, useState } from 'react';
import { useNotificationClient } from './NotificationProvider';
import { useMemo } from '../@lib';

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

export const useUserClient = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserProvider error');
  }

  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotificationClient();

  const login = (email: string) => {
    setUser({ id: 1, name: '홍길동', email });
    addNotification('성공적으로 로그인되었습니다', 'success');
  };

  const logout = () => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
