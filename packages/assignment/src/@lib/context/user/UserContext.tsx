import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { User } from '../../types';
import { useNotificationContext } from '../notification/useNotificationContext';

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotificationContext();

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

  const contextValue = useMemo<UserContextType>(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
