import { useNotification, useTheme, useUser } from "../providers";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();
  const { notifications } = useNotification();

  return (
    <header className={`p-4 ${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">뉴스 피드</h1>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 text-gray-800">
            {theme === 'light' ? '다크 모드' : '라이트 모드'}
          </button>
          {user && <span>{user.name}님 환영합니다</span>}
          {user && <button onClick={logout} className="px-3 py-1 rounded bg-red-500 text-white">로그아웃</button>}
          <div className="relative">
            <span className="cursor-pointer">🔔</span>
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                {notifications.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
