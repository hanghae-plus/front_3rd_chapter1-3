import React, {createContext, PropsWithChildren, useContext, useState} from "react";
import {User, UserContextType} from "../types.ts";
import {useCallback, useMemo} from "../@lib";
import {useNotification} from "./notificationContext.tsx";

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider');
    return context;
};

export const UserProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const {addNotification} = useNotification();
    const login = useCallback((name: string, email: string) => {
        setUser({name, email});
        addNotification("로그인 성공");
    }, []);
    const logout = useCallback(() => {
        setUser(null);
        addNotification("로그아웃 성공");
    }, []);
    const value = useMemo(() => ({user, login, logout}), [user, login, logout]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
