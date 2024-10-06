export type ThemeType = 'light' | 'dark';

export interface UserType {
  id: number;
  name: string;
  email: string;
}

export interface NotificationType {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export interface UserContextType {
  user: UserType | null;
  login: (email: string, password?: string) => void;
  logout: () => void;
}

export interface NotificationContextType {
  notifications: NotificationType[];
  addNotification: (message: string, type: NotificationType['type']) => void;
  removeNotification: (id: number) => void;
}

export interface ItemType {
  id: number;
  name: string;
  category: string;
  price: number;
}