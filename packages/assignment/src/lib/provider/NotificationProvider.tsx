import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useCallback, useMemo } from "../hooks";
import NotificationSystem from "../components/NotificationSystem";

interface Notification {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface NotifiContextType{
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: number) => void;
}

const NotifiContext = createContext<NotifiContextType | undefined>(undefined);
export const useNotifi = () => {
  const context = useContext(NotifiContext);
  if (context === undefined) {
    throw new Error('useNotifi must be used within an AppProvider');
  }
  return context;
};

export const NotifiProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((message: string, type: Notification['type'] = 'info') => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type
    };
    setNotifications(prev => [...prev, newNotification]);
  },[]);

  const removeNotification = useCallback((id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  },[]);
  const value = useMemo(() => ({ notifications, addNotification, removeNotification }), [notifications]);
  return( 
    <NotifiContext.Provider value={value}>
      <NotificationSystem />
        {children}
    </NotifiContext.Provider>
    );
};