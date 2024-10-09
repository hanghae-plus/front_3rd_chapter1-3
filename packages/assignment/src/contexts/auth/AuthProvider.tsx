import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { AuthContextType, User } from "../../types";
import { useNotificationContext } from "../notification/useNotificationContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const { addNotification } = useNotificationContext();

    const login = (email: string) => {
        setUser({ id: 1, name: "홍길동", email });
        addNotification("성공적으로 로그인되었습니다", "success");
    };

    const logout = () => {
        setUser(null);
        addNotification("성공적으로 로그아웃되었습니다", "success");
    };

    const contextValue: AuthContextType = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
