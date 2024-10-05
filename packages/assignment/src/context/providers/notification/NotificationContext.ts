import { createContext } from "react";

type AlertType = "info" | "success" | "warning" | "error";

interface Notification {
  id: number;
  message: string;
  type: AlertType;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);
