import React from 'react';
import { memo } from '../../@lib';
import { Notification } from '../../types';
import { renderLog } from '../../utils';
import { useNotification } from '../../hooks';

// NotificationContainer 컴포넌트
const NotificationContainer = ({
  notification,
  removeNotification,
}: {
  notification: Notification;
  removeNotification: (id: number) => void;
}) => {
  return (
    <div
      className={`p-4 rounded shadow-lg ${
        notification.type === 'success'
          ? 'bg-green-500'
          : notification.type === 'error'
          ? 'bg-red-500'
          : notification.type === 'warning'
          ? 'bg-yellow-500'
          : 'bg-blue-500'
      } text-white`}
    >
      {notification.message}
      <button
        onClick={() => removeNotification(notification.id)}
        className="ml-4 text-white hover:text-gray-200"
      >
        닫기
      </button>
    </div>
  );
};

// NotificationSystem 컴포넌트
const NotificationSystem: React.FC = memo(() => {
  renderLog('NotificationSystem rendered');
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => (
        <NotificationContainer
          key={notification.id}
          notification={notification}
          removeNotification={removeNotification}
        />
      ))}
    </div>
  );
});

export default NotificationSystem;
