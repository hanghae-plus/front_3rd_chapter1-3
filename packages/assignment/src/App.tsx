import React, { useState } from "react";
import { generateItems } from "./utils";
import { Header } from "./components/header";
import { ItemList } from "./components/item-list";
import { ComplexForm } from "./components/complex-form";
import {
  Notification,
  NotificationSystem,
} from "./components/notification-system";
import { User, UserContext } from "./contexts/user";
import { ThemeContext } from "./contexts/theme";
import { NotificationContext } from "./contexts/notification-system";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [items] = useState(generateItems(10000));
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  };

  const logout = () => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  };

  const addNotification = (message: string, type: Notification["type"]) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const themeValue = {
    theme,
    toggleTheme,
  };

  const userValue = {
    user,
    login,
    logout,
  };

  const notificationValue = {
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
      }`}
    >
      <ThemeContext.Provider value={themeValue}>
        <UserContext.Provider value={userValue}>
          <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ThemeContext.Provider value={themeValue}>
              <ItemList items={items} />
            </ThemeContext.Provider>
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <NotificationContext.Provider value={notificationValue}>
              <ComplexForm />
            </NotificationContext.Provider>
          </div>
        </div>
      </div>
      <NotificationContext.Provider value={notificationValue}>
        <NotificationSystem />
      </NotificationContext.Provider>
    </div>
  );
};

export default App;
