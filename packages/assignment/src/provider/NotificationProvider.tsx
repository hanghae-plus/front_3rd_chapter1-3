import { PropsWithChildren, useState } from "react";
import { useCallback, useMemo } from "../@lib";
import { NotificationContext } from "../context";
import { Notification } from "../types";


export const NotificationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((message: string, type: Notification['type']) => {
    setNotifications(prev => [...prev, { id: Date.now(), message, type }]);
  }, []);

  const removeNotification = useCallback((id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  }, []);

  const value = useMemo(() => ({
    notifications, addNotification, removeNotification
  }), [notifications, addNotification, removeNotification]);

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};