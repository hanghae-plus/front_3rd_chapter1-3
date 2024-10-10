import { renderLog } from "../../../../utils";
import { useNotificationContext } from "../../hook/useNotificationContext";
import Notification from "./Notification";

export function NotificationSystem() {
  renderLog("NotificationSystem rendered");
  const { notifications, removeNotification } = useNotificationContext();

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => {
        return (
          <Notification
            key={notification.id}
            {...notification}
            removeNotification={removeNotification}
          />
        );
      })}
    </div>
  );
}
