import { useContext } from "react";
import { NotificationContext } from "../store/NotificationContext";

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotificationContext must be used within an Notification"
    );
  }
  return context;
};
