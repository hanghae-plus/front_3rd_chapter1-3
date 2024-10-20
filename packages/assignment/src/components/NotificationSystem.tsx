import { useNotification } from "../context";
import { renderLog } from "../utils";

const notificationColors = {
	info: "bg-blue-500",
	success: "bg-green-500",
	error: "bg-red-500",
	warning: "bg-yellow-500",
};

// NotificationSystem 컴포넌트
export const NotificationSystem: React.FC = () => {
	renderLog("NotificationSystem rendered");
	const { notifications, removeNotification } = useNotification();

	return (
		<div className="fixed bottom-4 right-4 space-y-2">
			{notifications.map((notification) => (
				<div
					key={notification.id}
					className={`p-4 rounded shadow-lg ${notificationColors[notification.type]} text-white`}
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
