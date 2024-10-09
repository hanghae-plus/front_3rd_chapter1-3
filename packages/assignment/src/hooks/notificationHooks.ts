import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === null) {
    throw new Error(
      'useNotificationContext must be used within a NotificationProvider'
    );
  }
  return context;
};

// 선택적: 개별 값에 대한 훅을 제공할 수 있습니다.
export const useNotifications = () => {
  const { notifications } = useNotificationContext();
  return notifications;
};

export const useAddNotification = () => {
  const { addNotification } = useNotificationContext();
  return addNotification;
};

export const useRemoveNotification = () => {
  const { removeNotification } = useNotificationContext();
  return removeNotification;
};
