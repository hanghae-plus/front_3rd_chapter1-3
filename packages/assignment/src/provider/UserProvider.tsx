import React, { useState, PropsWithChildren } from 'react';
import { User } from '../types';
import { useCallback, useMemo } from '../@lib';
import { UserContext } from '../contexts';
import { useNotification } from '../hooks';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotification();

  const login = useCallback(
    (email: string) => {
      setUser({ id: 1, name: '홍길동', email });
      addNotification('성공적으로 로그인되었습니다', 'success');
    },
    [addNotification]
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  }, [addNotification]);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
