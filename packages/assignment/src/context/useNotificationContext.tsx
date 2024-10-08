import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Notification } from "../types/Notification";

interface NotificationContextType {
  addNotification: (
    message: string,
    type: "success" | "warning" | "error" | "info"
  ) => void;
  removeNotification: (id: number) => void;
  notifications: Notification[];
}

export const NotificationContext =
  createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const addNotification = useCallback(
    (message: string, type: "success" | "warning" | "error" | "info") => {
      const newNotification: Notification = {
        id: Date.now(),
        message,
        type,
      };
      setNotifications((prev) => [...prev, newNotification]);
    },
    []
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  const value = useMemo(
    () => ({ addNotification, removeNotification, notifications }),
    [addNotification, removeNotification, notifications]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error("Cannot find NotificationProvider");
  }
  return context;
};
