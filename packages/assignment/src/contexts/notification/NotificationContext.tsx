import { createContext } from "react";
import { NotificationsContextType } from "../../types";

export const NotificationContext = createContext<NotificationsContextType | undefined>(undefined);
