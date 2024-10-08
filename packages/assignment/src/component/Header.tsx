import React, { useCallback, useMemo } from "react";
import { renderLog } from "../utils";
import { useTheme } from "../context/useThemeContext";
import { MemoizedHeaderUser } from "./HeaderUser";
import { useUser } from "../context/useUserConText";
import { User } from "../types/User";

export const Header: React.FC = () => {
  renderLog("Header rendered");
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  const themeButtonText = useMemo(() => {
    return theme === "light" ? "다크 모드" : "라이트 모드";
  }, [theme]);

  const handleLogin = useCallback(() => {
    login("user@example.com", "password");
  }, [login]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            {themeButtonText}
          </button>
          <MemoizedHeaderUser
            user={user as User}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
        </div>
      </div>
    </header>
  );
};
