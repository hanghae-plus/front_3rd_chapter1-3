import { PropsWithChildren, useState } from "react";
import { Notification, NotificationContext, useCallback, useMemo } from "../@lib";

// ? id는 어떤식으로 만들면 좋을까?
let nextNotificationId = 0;

export const NotificationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((message: string, type: Notification["type"]) => {
    setNotifications((prev) => [...prev, { id: nextNotificationId++, message, type }]);
  }, []);

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      notifications,
      addNotification,
      removeNotification
    }),
    [notifications, addNotification, removeNotification]
  );

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
