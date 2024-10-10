import { useContext } from "react";
import { UserContext } from "../context";

/**
 * @description UserContext를 반환하는 커스텀 훅입니다. UserProvider 내에서만 사용할 수 있습니다.
 */
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within an UserProvider");
  }
  return context;
};
