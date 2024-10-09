import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext는 NotificationProvider 내부에서 사용해야 합니다."
    );
  }
  return context;
};
