import { ReactNode, useState } from 'react';
import { User } from '../types';
import { useCallback, useMemo } from '../@lib';
import { AuthContext, useNotification } from '../contexts';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { addNotification } = useNotification();

  const [user, setUser] = useState<User | null>(null);
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

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
