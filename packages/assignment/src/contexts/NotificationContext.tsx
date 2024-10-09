import { createContext, useContext, useState } from "react";
import { Notification } from "../types";

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: Notification["type"]) => {
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

  const value = {
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <>
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
    </>
  );
};
