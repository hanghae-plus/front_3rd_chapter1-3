import { PropsWithChildren, useState } from "react";
import { useCallback, useMemo, useNotificationContext, User, UserContext } from "../@lib";

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotificationContext();

  const login = useCallback((email: string, password: string) => {
    // TODO: check email
    console.log(email, "회원이 있다고 칠게요!");
    // TODO: check password
    console.log(password, "비밀번호도 맞았다 칠게요!");

    setUser({ name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, []);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
