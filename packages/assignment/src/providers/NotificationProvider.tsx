import { PropsWithChildren, useState } from "react";
import { useCallback, useMemo } from "../@lib";
import { NotificationContext } from "../context";
import { NotificationSystem } from "../components";
import { Notification } from "../types";

export const NotificationProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [notifications, setNotifications] = useState<Notification[]>([]);

	const addNotification = useCallback((message: string, type: Notification["type"]) => {
		const newNotification: Notification = {
			id: Date.now(),
			message,
			type,
		};
		setNotifications((prev) => [...prev, newNotification]);
	}, []);

	const removeNotification = useCallback((id: number) => {
		setNotifications((prev) => prev.filter((notification) => notification.id !== id));
	}, []);

	const value = useMemo(
		() => ({
			notifications,
			addNotification,
			removeNotification,
		}),
		[notifications, addNotification, removeNotification]
	);

	return (
		<NotificationContext.Provider value={value}>
			<NotificationSystem />
			{children}
		</NotificationContext.Provider>
	);
};
