import { useAppContext } from "./useAppContext.ts";
import { useMemo } from "react";

export const useUser = () => {
  const value = useAppContext();
  return useMemo(() => ({
    user: value.user,
    login: value.login,
    logout: value.logout,
  }), [value]);
}
