import { createContext } from "react";
import type { NotificationContextType } from "../types";

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export default NotificationContext;