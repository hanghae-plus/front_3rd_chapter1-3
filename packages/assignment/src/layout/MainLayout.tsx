import React from "react";
import ComplexForm from "../components/ComplexForm";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import NotificationSystem from "../components/NotificationSystem";
import { useTheme } from "../context/ThemeContext";
import { generateItems } from "../utils";
import { useNotification } from "../context/NotificationContext";
import { useUser } from "../context/UserContext";
import { useMemo, useCallback } from "../@lib";

// 메인 App 컴포넌트
const MainLayout: React.FC = () => {
  const count = 10000; // count를 변수로 정의
  const items = useMemo(() => generateItems(count), [count]);
  const { theme } = useTheme();
  const { login, logout } = useUser();
  const { addNotification } = useNotification();

  const handleLogin = useCallback(
    (email: string, password: string) => {
      login(email, password);
      addNotification("성공적으로 로그인되었습니다", "success");
    },
    [login, addNotification]
  );

  const handleLogout = useCallback(() => {
    logout();
    addNotification("로그아웃되었습니다", "info");
  }, [logout, addNotification]);

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
      }`}
    >
      <Header onLogin={handleLogin} onLogout={handleLogout} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList items={items} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </div>
      <NotificationSystem />
    </div>
  );
};

export default MainLayout;
