import React from "react";
import { useNotification } from "../context/useNotificationContext";
import { User } from "../types/User";

const HeaderUser = ({
  user,
  onLogin,
  onLogout,
}: {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}) => {
  const { addNotification } = useNotification();

  if (user) {
    return (
      <div className="flex items-center">
        <span className="mr-2">{user.name}님 환영합니다!</span>
        <button
          onClick={() => {
            addNotification("로그아웃 되었습니다", "success");
            onLogout();
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        addNotification("로그인 되었습니다", "success");
        onLogin();
      }}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      로그인
    </button>
  );
};

export const MemoizedHeaderUser = React.memo(HeaderUser);
