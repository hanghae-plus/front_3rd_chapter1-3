import React, { useState,ReactNode } from 'react';
import UserContext from '../context/UserContext';
import { UserType } from '../types/type';
import { useNotification } from '../hooks/useNotification'
import { useMemo } from '../@lib/hooks/useMemo'

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const { addNotification } = useNotification();

  const login = (email: string, password: string) => {
    setUser({ id: 1, name: '홍길동', email });
    addNotification('성공적으로 로그인되었습니다', 'success');
  };

  const logout = () => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};