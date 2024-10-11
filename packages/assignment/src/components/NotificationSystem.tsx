import React from 'react';
import { renderLog } from '../utils';
import { useNotification } from '../hooks/useNotification';

/**
 * @component NotificationSystem
 * @description 고정된 위치에 알림 메시지를 표시하는 알림 시스템 UI를 구현하고 있는 컴포넌트
 * @returns {JSX.Element} 알림 목록을 표시하는 React 컴포넌트
 */

export const NotificationSystem: React.FC = () => {
  renderLog('NotificationSystem rendered');
  const { notifications, removeNotification } = useNotification(); //useNotification 훅을 통해 알림 목록과 알림을 제거하는 hooks 가져오기

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map(notification => (
        <div key={notification.id} className={`p-4 rounded shadow-lg ${notification.type === 'success' ? 'bg-green-500' : notification.type === 'error' ? 'bg-red-500' : notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'} text-white`}>
          {notification.message}
          <button onClick={() => removeNotification(notification.id)} className="ml-4 text-white hover:text-gray-200">
            닫기
          </button>
        </div>
      ))}
    </div>
  );
};
