import { createContext } from 'react';

const NotificationContext = createContext<NotificationContextType | null>(null);
export default NotificationContext;
