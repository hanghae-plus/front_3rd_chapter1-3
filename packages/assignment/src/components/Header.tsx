import { Notification, User } from "../domain";

interface Props {
  themeLabel: string;
  className: string;
  user: User | null;
  notifications: Notification[];
  onToggleThemeClick?: () => void;
  onLogoutClick?: () => void;
}

export const Header = ({
  themeLabel,
  className,
  user,
  notifications,
  onLogoutClick,
  onToggleThemeClick,
}: Props) => {
  return (
    <header className={`p-4 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">뉴스 피드</h1>
        <div className="flex items-center space-x-4">
          <button onClick={onToggleThemeClick} className="px-3 py-1 rounded bg-gray-200 text-gray-800">
            {themeLabel}
          </button>
          {user && <span>{user.name}님 환영합니다</span>}
          {user && <button onClick={onLogoutClick} className="px-3 py-1 rounded bg-red-500 text-white">로그아웃</button>}
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
