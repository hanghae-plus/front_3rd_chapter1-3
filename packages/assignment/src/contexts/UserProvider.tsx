import { PropsWithChildren, useState } from 'react';
import { createContext, useCallback, useMemo } from '../@lib';
import { User } from '../types';
import { useNotiContext } from './NotiProvider';

interface IUserContext {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const [UserContextProvider, useUserContext] = createContext<IUserContext>({
  name: 'User',
});

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotiContext();
  const login = useCallback(
    (email: string) => {
      setUser({ id: 1, name: '홍길동', email });
      addNotification('성공적으로 로그인되었습니다', 'success');
    },
    [addNotification],
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  }, [addNotification]);

  const contextValue = useMemo(() => ({ user, login, logout }), [login, logout, user]);
  return <UserContextProvider value={contextValue}>{children}</UserContextProvider>;
};

export { useUserContext, UserProvider };
