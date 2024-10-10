import { User, Notification } from '.';

export interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export interface UserContextType {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export interface NotificationContextType {
    notifications: Notification[];
    addNotification: (message: string, type: Notification['type']) => void | null;
    removeNotification: (id: number) => void;
}
