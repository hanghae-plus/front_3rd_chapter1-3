import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = useCallback((name: string, email: string) => {
    setUser({ name, email });
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
