import React, { useState, useCallback } from 'react';
import { useThemeContext, useUserContext } from '../context/index.ts';
import { memo} from '../@lib';
import { renderLog } from '../utils';

export const Header: React.FC = memo(() => {
  renderLog('Header rendered');
  const { theme, toggleTheme } = useThemeContext();
  const { user, login, logout } = useUserContext();
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '', name: '' });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    login(loginInfo.email, loginInfo.password, loginInfo.name);
  }, [loginInfo, login]);

  const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
  }, [logout]);

  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              {theme === 'light' ? '다크 모드' : '라이트 모드'}
            </button>
            {user ? (
              <div className="flex items-center">
                <span className="mr-2">{user.name}님 환영합니다!</span>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">로그아웃</button>
              </div>
            ) : (
              <div>
                <input
                  type="email"
                  name="email"
                  value={loginInfo.email}
                  onChange={handleInputChange}
                  placeholder="이메일"
                  style={{ marginRight: '5px' }}
                  className="p-2 border border-gray-300 rounded text-black"
                />
                <input
                  type="password"
                  name="password"
                  value={loginInfo.password}
                  onChange={handleInputChange}
                  placeholder="패스워드"
                  style={{ marginRight: '5px' }}
                  className="p-2 border border-gray-300 rounded text-black"
                />
                <input
                  type="text"
                  name="name"
                  value={loginInfo.name}
                  onChange={handleInputChange}
                  placeholder="사용자 이름"
                  style={{ marginRight: '5px' }}
                  className="p-2 border border-gray-300 rounded text-black"
                />
                <button onClick={handleLogin} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">로그인</button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
});

