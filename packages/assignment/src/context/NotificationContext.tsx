import { createContext } from 'react';
import { NotificationContextType } from '../types/type';

const NotificationContext = createContext<NotificationContextType | null>(null);

export default NotificationContext;
