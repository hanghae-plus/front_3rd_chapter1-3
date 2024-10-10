import { useSafeContext } from "../hooks/useSafeContext";
import { renderLog } from "../utils";
import { NotificationType_e } from "../models/Notification";
import { Contexts } from "../contexts";

export const NotificationSystem: React.FC = () => {
  renderLog("NotificationSystem rendered");

  // ! hooks
  const { notifications, removeNotification } = useSafeContext(
    Contexts.Notification
  );

  // ! functions
  const getNotificationClassNameByType = (type: NotificationType_e) => {
    switch (type) {
      case NotificationType_e.success:
        return "bg-green-500";
      case NotificationType_e.warning:
        return "bg-yellow-500";
      case NotificationType_e.error:
        return "bg-red-500";
      case NotificationType_e.info:
        return "bg-blue-500";
    }
  };

  // ! render
  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={
            "p-4 rounded shadow-lg text-white " +
            getNotificationClassNameByType(notification.type)
          }
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
};
