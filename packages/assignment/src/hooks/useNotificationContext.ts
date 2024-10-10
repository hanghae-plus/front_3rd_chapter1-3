import { useContext } from "react";
import { NotificationContext } from "../context";

/**
 * @description NotificationContext를 반환하는 커스텀 훅입니다. NotificationProvider 내에서만 사용할 수 있습니다.
 */
export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotificationContext must be used within an NotificationProvider");
  }
  return context;
};
