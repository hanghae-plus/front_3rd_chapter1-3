import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { useNotification } from '../hooks';

export interface User {
  name: string;
  email: string;
  age: number;
}

export interface UserContextType {
  user: User | null;
  login: (name: string, email: string, age: number) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { addNotification } = useNotification();

  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(
    (name: string, email: string, age: number) => {
      setUser({ name, email, age });
      addNotification('로그인 하였습니다.', 'success');
    },
    [addNotification]
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification('로그아웃 하였습니다.', 'info');
  }, [addNotification]);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
