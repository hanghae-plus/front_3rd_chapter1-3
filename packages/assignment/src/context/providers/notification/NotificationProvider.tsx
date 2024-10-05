import { useState } from "react";
import { useCallback, useMemo } from "../../../@lib";
import {
  NotificationContext,
  NotificationContextType,
} from "./NotificationContext";
import { NotificationSystem } from "./components/NotificationSystem";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const NotificationProvider = ({ children }: ThemeProviderProps) => {
  const [notifications, setNotifications] = useState<
    NotificationContextType["notifications"]
  >([]);

  const addNotification = useCallback(
    (
      message: string,
      type: NotificationContextType["notifications"][number]["type"]
    ) => {
      const newNotification: NotificationContextType["notifications"][number] =
        {
          id: Date.now(),
          message,
          type,
        };
      setNotifications((prev) => [...prev, newNotification]);
    },
    []
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  const values = useMemo(
    () => ({ notifications, addNotification, removeNotification }),
    [notifications, addNotification, removeNotification]
  );

  return (
    <NotificationContext.Provider value={values}>
      {children}
      <NotificationSystem />
    </NotificationContext.Provider>
  );
};
