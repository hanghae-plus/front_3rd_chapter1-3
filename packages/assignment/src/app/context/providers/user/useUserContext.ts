import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useThemeContext는 ThemeProvider 내부에서 사용해야 합니다."
    );
  }
  return context;
};
