import React, { useState,ReactNode } from 'react';
import UserContext from '../context/UserContext';
import { UserType } from '../types/type';
import { useNotification } from '../hooks/useNotification'
import { useMemo, useCallback } from '../@lib'

/**
 * @descripton 사용자 정보 및 로그인/로그아웃 기능을 관리하고 자식 컴포넌트에 제공하는 컨텍스트 프로바이더
 *
 * @param {ReactNode} children - 이 프로바이더 내부에서 렌더링할 자식 컴포넌트
 * @returns {ReactNode} UserContext.Provider를 통해 자식 컴포넌트에게 사용자 정보와 로그인/로그아웃 함수를 제공
 */

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const { addNotification } = useNotification(); //useNotification을 사용하여 로그인 및 로그아웃 이벤트 시 알림을 추가

  const login = useCallback((email: string, password: string) => {
    setUser({ id: 1, name: '홍길동', email });
    addNotification('성공적으로 로그인되었습니다', 'success');
  }, [addNotification]);

  const logout = useCallback(() => {
    setUser(null);
    addNotification('로그아웃되었습니다', 'info');
  }, [addNotification]);

  //useMemo을 사용하여 사용자 상태 변경에 따라 컨텍스트 값을 재계산
  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};