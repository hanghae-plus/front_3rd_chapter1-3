import { useAppContext } from "./useAppContext.ts";
import { useMemo } from "react";

export const useNotification = () => {
  const value = useAppContext();
  return useMemo(() => ({
    notifications: value.notifications,
    addNotification: value.addNotification,
    removeNotification: value.removeNotification,
  }), [value]);
}
