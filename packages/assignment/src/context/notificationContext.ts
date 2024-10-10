import { createContext, useContext } from 'react';
import { Notification } from '../types';

export type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: number) => void;
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('NotificationProvider 안에서 쓰기!');
  return context;
};
