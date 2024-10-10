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
      className={`p-4 rounded shadow-lg ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : type === "warning"
          ? "bg-yellow-500"
          : "bg-blue-500"
      } text-white`}
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
