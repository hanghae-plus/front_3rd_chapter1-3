interface ItemType {
  id: number;
  name: string;
  category: string;
  price: number;
}

type ThemeType = 'light' | 'dark';

interface UserType {
  id: number;
  name: string;
  email: string;
}

interface NotificationType {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface NotificationContextType {
  notifications: NotificationType[];
  addNotification: (message: string, type: NotificationType['type']) => void;
  removeNotification: (id: number) => void;
}
