import { createContext } from "react";
import { Notification, NotificationType_e } from "../models/Notification";

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type: NotificationType_e) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext =
  createContext<NotificationContextType | null>(null);
NotificationContext.displayName = "NotificationContext";
