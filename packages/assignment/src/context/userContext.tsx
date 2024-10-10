import { ReactNode, createContext, useContext, useState } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within an AppProvider");
  }
  return context;
};

// UserProvider 컴포넌트
interface UserProviderProps {
  children: ReactNode; // children 타입 지정
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    // addNotification("성공적으로 로그인되었습니다", "success");
  };

  const logout = () => {
    setUser(null);
    // addNotification("로그아웃되었습니다", "info");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}