import { createContext, useContext } from "react";
import { Notification } from "../types";

interface NotificationContextType {
	notifications: Notification[];
	addNotification: (message: string, type: Notification["type"]) => void;
	removeNotification: (id: number) => void;
}

export const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
	const context = useContext(NotificationContext);
	if (!context) throw new Error("useNotification must be used within a NotificationProvider");
	return context;
};
