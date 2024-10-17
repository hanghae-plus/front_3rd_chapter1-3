import { Notification } from './Notification';

/**
 * @description 알림 컨텍스트의 타입을 정의하는 인터페이스. 알림 목록과 알림을 추가/제거하는 함수가 포함.
 */
export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: number) => void;
}