import React from 'react';
import { useTheme } from '../hooks/useTheme';

/**
 * @component ThemeComponent
 * @description 테마에 따라 스타일이 적용된 컨테이너를 제공하는 컴포넌트
 * 
 * @param {object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 자식 컴포넌트 또는 요소들
 * @returns 테마에 맞게 스타일링된 div 요소를 반환
 */

export const ThemeComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme(); //useTheme 훅을 사용하여 현재 선택된 테마를 가져오기

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
      {children}
    </div>
  );
};
