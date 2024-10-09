import { PropsWithChildren, useState } from "react";
import { User } from "../types";
import { useCallback, useMemo } from "../@lib";
import { UserContext } from "../context";
import { useNotification } from "../hooks";

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const { addNotification } = useNotification();
    

    const login = useCallback((email: string, password: string) => {
      setUser({ id: 1, name: '', email });
      addNotification('성공적으로 로그인되었습니다', 'success');
    }, []);

    const logout = useCallback(() => {
      setUser(null);
      addNotification('로그아웃되었습니다', 'info');
    }, []);

    const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};