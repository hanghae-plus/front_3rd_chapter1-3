import { createContext, useCallback, useMemo, useState } from "react";
import { Notification } from "../components/notification-system";

interface INotificationContext {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}

// Create Context
export const NotificationContext = createContext<
  INotificationContext | undefined
>(undefined);

// Provider
export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (message: string, type: Notification["type"]) => {
      const newNotification: Notification = {
        id: Date.now(),
        message,
        type,
      };

      setNotifications((prev) => [...prev, newNotification]);
    },
    [setNotifications]
  );

  const removeNotification = useCallback(
    (id: number) => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    },
    [setNotifications]
  );

  const value = useMemo(
    () => ({ notifications, addNotification, removeNotification }),
    [notifications, addNotification, removeNotification]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
