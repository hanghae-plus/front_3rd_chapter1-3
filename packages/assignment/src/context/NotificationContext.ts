import {createContext, useContext} from 'react';

interface Notification {
    id: number;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}

interface NotificationContextType {
    notifications: Notification[];
    addNotification: (message: string, type: Notification['type']) => void;
    removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotificationContext must be used within a NotificationProvider');
    }
    return context;
};

export default NotificationContext;