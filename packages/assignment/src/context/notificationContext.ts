import { Notification } from '../types';
import { createTypedContext } from '../utils';

export type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: number) => void;
};

export const { context: NotificationContext, useContext: useNotification } =
  createTypedContext<NotificationContextType>();
