import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useCallback, useMemo } from "../hooks";
import { useNotifi } from "./NotificationProvider";
interface User {
  id?: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within an AppProvider');
  }
  return context;
};
export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const {addNotification} = useNotifi()
  const [user, setUser] = useState<User | null>(null);
  const login = useCallback((name: string, email: string) => {
    setUser({ name, email });
    addNotification('로그인완!', 'success')
  }, [addNotification]);
  const logout = useCallback(() => {
    setUser(null);
    addNotification('로그아웃완!', 'warning')

  }, [addNotification]);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};