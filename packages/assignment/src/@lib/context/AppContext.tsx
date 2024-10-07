import { createContext, PropsWithChildren, useState } from 'react';
import { Notification, User } from '../types';

interface AppContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const login = (email: string) => {
    setUser({ id: 1, name: '홍길동', email });
    addNotification('성공적으로 로그인되었습니다', 'success');
  };

  const logout = () => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  };

  const addNotification = (message: string, type: Notification['type']) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const contextValue: AppContextType = {
    user,
    login,
    logout,
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
