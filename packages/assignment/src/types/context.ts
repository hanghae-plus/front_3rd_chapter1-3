import { User, Notification } from ".";

// 컨텍스트 관련 타입
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
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}
