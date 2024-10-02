import { useContextSelector } from "../../@lib";
import { AppContext } from "../AppProvider";

export const useNotification = () => {
  return useContextSelector(AppContext, value => ({
    notifications: value.notifications,
    addNotification: value.addNotification,
    removeNotification: value.removeNotification,
  }))
}
