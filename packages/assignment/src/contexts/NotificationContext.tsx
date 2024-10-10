import { createContext, useMemo, useState } from 'react';
import { NotificationContextType, Notification } from '../types';
import { useCallback } from '../@lib';

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((message: string, type: Notification['type']) => {
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

    const value = useMemo(
        () => ({
            notifications,
            addNotification,
            removeNotification,
        }),
        [notifications, addNotification, removeNotification]
    );

    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
