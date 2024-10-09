import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('Notification Provider를 찾을 수 없습니다.');
  }

  return context;
};

export default useNotification;
