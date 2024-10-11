import React, {createContext, PropsWithChildren, useContext, useState} from "react";
import {useCallback, useMemo} from "../@lib";
import {Notification, NotificationContextType} from "../types.ts";

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context)
        throw new Error(
            'useNotification must be used within a NotificationProvider'
        );
    return context;
};

export const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((message: string) => {
        setNotifications((prev) => [...prev, {id: Date.now(), message}]);
    }, []);

    const removeNotification = useCallback((id: number) => {
        setNotifications((prev) => prev.filter((notif: Notification) => notif.id !== id));
    }, []);

    const value = useMemo(
        () => ({
            notifications,
            addNotification,
            removeNotification,
        }),
        [notifications, addNotification, removeNotification]
    );

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};
