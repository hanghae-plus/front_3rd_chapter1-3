import React from 'react';
import { useTheme, useUser } from "../hooks";
import { renderLog } from '../utils';

/**
 * @component Header
 * @description 애플리케이션의 헤더 부분을 렌더링하는 메모이제이션된 함수형 컴포넌트
 * @returns {JSX.Element} 로그인 상태, 테마 토글 버튼을 포함한 헤더 요소를 반환
 */

export const Header: React.FC = () => {
  renderLog('Header rendered');
  const { theme, toggleTheme } = useTheme(); //useTheme 훅을 사용하여 현재 테마 상태와 테마 토글 함수 관련 hooks 호출
  const { user, login, logout } = useUser(); //useUser 훅을 통해 사용자 로그인 상태와 관련 hooks 호출

  /** 
   * @function handleLogin
   * @description 사용자를 로그인하는 이벤트 핸들러 함수
   */

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
};