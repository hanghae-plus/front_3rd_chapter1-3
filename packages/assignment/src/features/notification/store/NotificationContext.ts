import { createContext } from "react";

export type Notification = {
  id: number;
  message: string;
  type: "info" | "success" | "warning" | "error";
};

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);
