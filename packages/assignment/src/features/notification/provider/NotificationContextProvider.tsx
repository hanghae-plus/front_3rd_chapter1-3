import { useState } from "react";
import {
  Notification,
  NotificationContext,
} from "../store/NotificationContext";

type Props = {
  children: React.ReactNode;
};

export default function NotificationContextProvider({ children }: Props) {
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

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
