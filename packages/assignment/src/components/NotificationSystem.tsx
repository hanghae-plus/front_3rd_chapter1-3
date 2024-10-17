import React from "react";
import { memo } from "../@lib";
import { renderLog } from "../utils";
import { useNotificationContext } from "../hooks";

/**
 * @description 알림을 화면 하단에 표시하고, 사용자가 알림을 닫을 수 있는 컴포넌트입니다.
 * @returns 화면 하단에 표시된 알림 목록
 */
export const NotificationSystem: React.FC = memo(() => {
  renderLog("NotificationSystem rendered");

  const { notifications, removeNotification } = useNotificationContext();

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded shadow-lg ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "error"
              ? "bg-red-500"
              : notification.type === "warning"
              ? "bg-yellow-500"
              : "bg-blue-500"
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
      ))}
    </div>
  );
});
