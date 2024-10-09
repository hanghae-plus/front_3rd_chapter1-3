import { createContext } from "react";

type NotificationType = "info" | "success" | "warning" | "error";

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);
