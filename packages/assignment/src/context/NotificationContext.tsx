import { createContext } from 'react';
import { NotificationContextType } from '../types/type';

/**
 * @description 서비스 전체에서 알림을 관리하고 알림 관련 작업을 실행할 수 있는 컨텍스트
 * 알림 목록과 알림을 추가하거나 제거하는 함수들을 포함
 * 알림을 전역적으로 관리하고, 상위 컴포넌트에서 제공한 값을 통해 초기화되고 값이 명시적으로 제공되지 않은 경우 null을 반환
 *
 * @type {React.Context<NotificationContextType | null>}
 */
const NotificationContext = createContext<NotificationContextType | null>(null);

export default NotificationContext;
