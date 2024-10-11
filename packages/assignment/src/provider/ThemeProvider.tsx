import React, { useState, ReactNode } from 'react';
import ThemeContext from '../context/ThemeContext'
import { ThemeType } from '../types/type';
import { useMemo, useCallback } from '../@lib'

/**
 * @description 테마 상태를 관리하고, 테마 관련 정보를 자식 컴포넌트에 제공하는 컨텍스트 프로바이더
 * 알림 목록을 상태로 관리하며, 알림을 추가하거나 제거하는 함수를 포함
 *
 * @param {ReactNode} children - 이 프로바이더 내부에서 렌더링할 자식 컴포넌트
 * @returns {ReactNode} ThemeContext.Provider를 통해 자식 컴포넌트에게 테마 상태와 토글 함수를 제공
 */

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  //useMemo를 사용하여 테마 변경에 따라 컨텍스트 값을 재계산
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};