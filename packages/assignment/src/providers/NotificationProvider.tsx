import { PropsWithChildren, useContext, useState } from "react";
import { useCallback, useMemo } from "../@lib/hooks";

import { createContext } from "react";

interface NotificationType {
  id: number;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

interface NotificationContextType {
  notifications: NotificationType[];
  addNotification: (message: string, type: NotificationType["type"]) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotificationContext must be used within an AppProvider"
    );
  }
  return context;
};

const NotificationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const addNotification = useCallback(
    (message: string, type: NotificationType["type"]) => {
      const newNotification: NotificationType = {
        id: Date.now(),
        message,
        type,
      };
      setNotifications((prev) => [...prev, newNotification]);
    },
    []
  );
  const removeNotification = useCallback(
    (id: number) =>
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      ),
    []
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

export default NotificationProvider;
