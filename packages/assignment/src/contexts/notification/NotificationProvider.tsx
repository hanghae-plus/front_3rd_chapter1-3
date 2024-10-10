import { useState } from "react";
import { NotificationsContextType, Notification } from "../../types";
import { NotificationContext } from "./NotificationContext";
import { useCallback } from "../../@lib";

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((message: string, type: Notification["type"]) => {
        const newNotification: Notification = {
            id: Date.now(),
            message,
            type,
        };
        setNotifications((prev) => [...prev, newNotification]);
    }, []);

    const removeNotification = useCallback((id: number) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, []);

    const contextValue: NotificationsContextType = {
        notifications,
        addNotification,
        removeNotification,
    };

    return <NotificationContext.Provider value={contextValue}>{children}</NotificationContext.Provider>;
};
