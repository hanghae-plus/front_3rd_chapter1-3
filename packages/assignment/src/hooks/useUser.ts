import { useContext } from 'react';
import UserContext from '../context/UserContext';

/**
 * @function useUser
 * @description NotificationContext를 사용하여 알림 시스템의 데이터와 메서드에 접근하는 훅
 * 컨텍스트가 제공되지 않았을 경우 오류를 발생시키기 때문에 해당 컴포넌트가 NotificationProvider 내부에 위치해야 함
 * 
 * @returns {UserContextType} 사용자 데이터와 사용자 관련 동작을 수행하는 함수를 포함한 컨텍스트 객체
 * @throws {Error} UserProvider 외부에서 훅을 사용할 경우 오류 발생
 */

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
