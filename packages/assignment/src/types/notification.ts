type NotiType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
    id: number;
    message: string;
    type: NotiType;
}

export interface NotificationContextType {
    notifications: Notification[];
    addNotification: (message: string, type: Notification['type']) => void;
    removeNotification: (id: number) => void;
}