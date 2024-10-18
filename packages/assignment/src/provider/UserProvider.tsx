
import React, { useState } from 'react';
import UserContext, { User } from '../context/UserContext';
import { useCallback, useMemo } from '../@lib';
import { useNotificationContext } from '../context/NotificationContext';


export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);  
  const {addNotification} = useNotificationContext()

  const login = useCallback((email: string, password: string, name: string) => {
    setUser({ email, password, name });
    addNotification('성공적으로 로그인되었습니다', 'success');
  }, [addNotification]);

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, [addNotification]);

  return (
    <UserContext.Provider value={useMemo(() => ({ user, login, logout }), [user, login, logout])}>
      {children}
    </UserContext.Provider>
  );
};
