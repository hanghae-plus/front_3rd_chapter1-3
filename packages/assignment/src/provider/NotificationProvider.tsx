import React, { useState, ReactNode } from 'react';
import { useMemo } from '../@lib/hooks/useMemo'
import NotificationContext from '../context/NotificationContext'
import { NotificationType } from '../types/type';

/**
 * @description 알림을 관리하고 알림 관련 상태를 자식 컴포넌트에 제공하는 컨텍스트 프로바이더
 * 알림 목록을 상태로 관리하며, 알림을 추가하거나 제거하는 함수를 포함
 *
 * @param {ReactNode} children - 이 프로바이더 내부에서 렌더링할 자식 컴포넌트
 * @returns {ReactNode} NotificationContext.Provider를 통해 자식 컴포넌트에게 알림 상태와 함수를 제공
 */

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const addNotification = (message: string, type: NotificationType['type']) => {
    const newNotification: NotificationType = { id: Date.now(), message, type };
    setNotifications(prev => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  //useMemo를 사용하여 알림 목록의 변화에 따라 컨텍스트 값을 재계산
  const value = useMemo(() => ({ notifications, addNotification, removeNotification }), [notifications]); 

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
