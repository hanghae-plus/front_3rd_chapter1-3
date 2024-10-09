import { createContext, PropsWithChildren, useState } from 'react';
import { useCallback, useMemo } from '../@lib';
import { useAddNotification } from '../hooks/notificationHooks';

interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserContextType {
  user: User | null;
  login: (id: number, name: string, email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const addNotification = useAddNotification();

  const login = useCallback(
    (id: number, name: string, email: string) => {
      setUser({ id, name, email });
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
