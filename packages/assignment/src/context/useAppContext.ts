import { useState, useCallback, useMemo } from "react";
import { User } from "../types/User";
import { Notification } from "../types/Notification";
import { AppContextType } from "../types/Context";

export const useAppContextValue = (): AppContextType => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("Theme toggled");
  }, []);

  const login = useCallback((email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, []);

  const addNotification = useCallback(
    (message: string, type: Notification["type"]) => {
      const newNotification: Notification = {
        id: Date.now(),
        message,
        type,
      };
      setNotifications((prev) => [...prev, newNotification]);
    },
    []
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
      user,
      login,
      logout,
      notifications,
      addNotification,
      removeNotification,
    }),
    [
      theme,
      toggleTheme,
      user,
      login,
      logout,
      notifications,
      addNotification,
      removeNotification,
    ]
  );

  return contextValue;
};
