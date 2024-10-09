import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

export interface User {
  name: string;
  email: string;
  age: number;
}

export interface UserContextType {
  user: User | null;
  login: (name: string, email: string, age: number) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((name: string, email: string, age: number) => {
    setUser({ name, email, age });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
