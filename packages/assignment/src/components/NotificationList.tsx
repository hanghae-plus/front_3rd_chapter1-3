import { Notification } from "../domain";
import { memo } from "../@lib";

interface Props {
  items: Notification[];
  onCloseClick: (id: number) => void;
}

export const NotificationList = memo(({ items, onCloseClick }: Props) => {
  return (
    <div className="fixed top-16 right-4 w-64 space-y-2">
      {items.map(({ id, message }) => (
        <div key={id} className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 relative">
          <button
            onClick={() => onCloseClick(id)}
            className="absolute top-0 right-0 mt-1 mr-1 text-yellow-700 hover:text-yellow-900"
          >
            &times;
          </button>
          {message}
        </div>
      ))}
    </div>
  );
});
