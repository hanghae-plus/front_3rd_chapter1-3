import { useCallback, useState } from "react";
import { AuthContext } from "./AuthContext";
import { AuthContextType, User } from "../../types";
import { useNotificationContext } from "../notification/useNotificationContext";
import { useMemo } from "../../@lib";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const { addNotification } = useNotificationContext();

    const login = useCallback(
        (email: string) => {
            setUser({ id: 1, name: "홍길동", email });
            addNotification("성공적으로 로그인되었습니다", "success");
        },
        [addNotification]
    );

    const logout = useCallback(() => {
        setUser(null);
        addNotification("성공적으로 로그아웃되었습니다", "success");
    }, [addNotification]);

    const contextValue = useMemo<AuthContextType>(
        () => ({
            user,
            login,
            logout,
        }),
        [user, login, logout]
    );

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
