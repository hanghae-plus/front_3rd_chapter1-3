import { useCallback } from '../@lib';
import { useNotificationContext } from '../contexts';
import { renderLog } from '../utils';

export const NotificationSystem: React.FC = () => {
  renderLog('NotificationSystem rendered');
  const { notifications, removeNotification } = useNotificationContext();

  const getNotificationType = useCallback((type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded shadow-lg ${getNotificationType(notification.type)} text-white`}
        >
          {notification.message}
          <button onClick={() => removeNotification(notification.id)} className="ml-4 text-white hover:text-gray-200">
            닫기
          </button>
        </div>
      ))}
    </div>
  );
};
