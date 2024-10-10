import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useCallback, useMemo } from '../@lib';
import { useNotificationContext } from './NotificationContext';

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

const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { addNotification } = useNotificationContext();

  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(
    (name: string, email: string) => {
      setUser({ id: Date.now(), name, email });
      addNotification('성공적으로 로그인되었습니다', 'success');
    },
    [addNotification],
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  }, [addNotification]);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within a UserProvider');
  return context;
};
