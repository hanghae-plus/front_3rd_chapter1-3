import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext'

/**
 * @function useNotification
 * @description Context를 사용하여 알림 시스템의 데이터와 메서드에 접근하는 훅입
 * 컨텍스트가 제공되지 않았을 경우 오류를 발생시키기 때문에 해당 컴포넌트가 NotificationProvider 내부에 위치해야 함
 * 
 * @returns {NotificationContextType} 알림 데이터와 알림을 제어하는 함수를 포함한 컨텍스트 객체
 * @throws {Error} NotificationProvider 외부에서 훅을 사용할 경우 오류 발생
 */

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification must be used within a NotificationProvider');
  return context;
};
