import { PropsWithChildren, useState } from 'react';
import { createContext, useCallback, useMemo } from '../@lib';
import { Notification } from '../types';

interface INotiContext {
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: number) => void;
}

const [NotiContextProvider, useNotiContext] = createContext<INotiContext>({ name: 'Noti' });

const NotiProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const addNotification = useCallback((message: string, type: Notification['type']) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  }, []);

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({ notifications, addNotification, removeNotification }),
    [addNotification, notifications, removeNotification],
  );
  return <NotiContextProvider value={contextValue}>{children}</NotiContextProvider>;
};

export { useNotiContext, NotiProvider };
