import { renderLog } from "../utils";
import { useUser } from "../@lib/hooks/useUser";
import { useTheme } from "../@lib/hooks/useTheme";

import LoginForm from "./LoginForm";
import { memo } from "../@lib";

const Header: React.FC = () => {
  renderLog("Header rendered");
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
        <div className="flex items-center flex">
          {user ? (
            <div className="flex items-center">
              <span className="mr-2">{user.name}님 환영합니다!</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <LoginForm />
          )}
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 mr-2"
          >
            {theme === "light" ? "다크 모드" : "라이트 모드"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
