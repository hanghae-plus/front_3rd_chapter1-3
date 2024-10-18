import { useEffect } from "react";
import type { Notification } from "../../../store/NotificationContext";
import { useRef } from "../../../../../@lib";

type Props = Notification & {
  removeNotification: (id: number) => void;
};

export default function Notification({
  id,
  message,
  type,
  removeNotification,
}: Props) {
  const setTimeoutRef = useRef<number>(null);

  const closeNotification = () => {
    removeNotification(id);
  };

  const notificationClass = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  useEffect(() => {
    setTimeoutRef.current = setTimeout(() => {
      closeNotification();
    }, 2000);
    return () => {
      if (typeof setTimeoutRef.current === "number") {
        clearTimeout(setTimeoutRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`p-4 rounded shadow-lg ${notificationClass(type)} text-white`}
    >
      {message}
      <button
        onClick={closeNotification}
        className="ml-4 text-white hover:text-gray-200"
      >
        닫기
      </button>
    </div>
  );
}
