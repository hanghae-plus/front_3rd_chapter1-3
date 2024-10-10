// 타입 정의
export type Theme = 'light' | 'dark';

export interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
}

export interface User {
    name: string;
    email: string;
}

export interface Notification {
    id: number;
    message: string;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export interface UserContextType {
    user: User | null;
    login: (name: string, email: string) => void;
    logout: () => void;
}

export interface NotificationContextType {
    notifications: Notification[];
    addNotification: (message: string) => void;
    removeNotification: (id: number) => void;
}
