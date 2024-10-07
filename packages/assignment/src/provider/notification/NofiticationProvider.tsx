import { PropsWithChildren, useState } from 'react';
import { useCallback, useMemo } from '../../@lib';
import NotificationContext from './NotificationContext';

const NotificationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const addNotification = useCallback((message: string, type: NotificationType['type']) => {
    const newNotification: NotificationType = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  }, []);
  const removeNotification = useCallback(
    (id: number) => setNotifications((prev) => prev.filter((notification) => notification.id !== id)),
    []
  );
  const value = useMemo(
    () => ({ notifications, addNotification, removeNotification }),
    [notifications, addNotification, removeNotification]
  );
  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};

export default NotificationProvider;
