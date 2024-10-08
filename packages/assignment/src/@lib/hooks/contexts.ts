import { createContext, useContext } from "react";
// ? 이렇게 한 파일 안에 다 넣으니 보기가 안좋은데 그렇다고 다 따로 분리하는 것도 별로 일 것 같아요

// ? 타입이랑 인터페이스 따로 빼는 게 더 좋을까?
export type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// createContext는 Context를 반환한다
// Context는 보통 Provider, Consumer, displayName를 포함한 객체이다
// Provider: Context의 값을 제공하는 컴포넌트 value prop을 통해 하위 컴포넌트에 데이터 전달
// Consumer: Context의 값을 소비하는 컴포넌트 Context의 현재 값을 읽고, 사용해 UI를 렌더링 함

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within an ThemeProvider");
  }
  return context;
};

// ? 타입이랑 인터페이스 나누는 기준으로도 고민을 많이 했었던 기억이 난다..
// ? 나는 거의 type을 사용하는 편(vscode에서 다 나오니까)
// ? 다른 분들은 어떠신지요
export interface User {
  name: string;
  email: string;
}
interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within an UserProvider");
  }
  return context;
};

type NotificationType = "info" | "success" | "warning" | "error";
export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}
interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotificationContext must be used within an NotificationProvider");
  }
  return context;
};
