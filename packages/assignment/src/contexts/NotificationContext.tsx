import { createContext } from 'react';
import { Notification } from '../types';

interface NotificationContextProps {
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext =
  createContext<NotificationContextProps | null>(null);
