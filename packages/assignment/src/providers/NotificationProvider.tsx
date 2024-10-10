import React, { useState, ReactNode } from "react";
import { useMemo, useCallback } from "../@lib";
import { Notification, NotificationContextType } from "../types";
import { NotificationContext } from "../context";

/**
 * @description 애플리케이션 전역에서 알림(notification)을 관리하는 Provider입니다.
 * @param children - Provider로 감쌀 하위 컴포넌트들
 */
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (message: string, type: Notification["type"]) => {
      const newNotification: Notification = {
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

  const notificationContextValue: NotificationContextType = useMemo(
    () => ({
      notifications,
      addNotification,
      removeNotification,
    }),
    [notifications, addNotification, removeNotification]
  );

  return (
    <NotificationContext.Provider value={notificationContextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
