import React from 'react';
import { memo } from '../@lib';
import { useTheme} from '../hooks/useTheme'
import { useUser } from '../hooks/useUser'
import { renderLog } from '../utils';

export const Header: React.FC = memo(() => {
  renderLog('Header rendered');
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  const handleLogin = () => {
    login('user@example.com', 'password');
  };

  return (
    <header className={`bg-${theme === 'light' ? 'gray-800' : 'blue-500'} text-white p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
        <div className="flex items-center">
          <button onClick={toggleTheme} className="mr-2 py-2 px-4 rounded font-bold">
            {theme === 'light' ? '다크 모드' : '라이트 모드'}
          </button>
          {user ? (
            <div className="flex items-center">
              <span className="mr-2">{user.name}님 환영합니다!</span>
              <button onClick={logout} className="py-2 px-4 rounded font-bold bg-red-500 hover:bg-red-700">
                로그아웃
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className="py-2 px-4 rounded font-bold bg-green-500 hover:bg-green-700">
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
});