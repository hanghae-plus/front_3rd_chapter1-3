import { createContext, useContext } from "react";
import { NotificationContextType } from "../types";

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

// 커스텀 훅: useAppContext
export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
