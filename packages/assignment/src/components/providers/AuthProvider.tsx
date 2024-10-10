import { useState } from 'react';
import { AuthContextType, User } from '../../types';
import { useCallback, useMemo } from '../../@lib';
import { useNotification } from '../../hooks/useNotification';
import { AuthContext } from '../../contexts/AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotification();

  const login = useCallback((email: string) => {
    setUser({ id: 1, name: '홍길동', email });
    addNotification('성공적으로 로그인되었습니다', 'success');
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  }, []);

  const AuthContextValue: AuthContextType = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
