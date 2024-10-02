import { useContextSelector } from "../../@lib";
import { AppContext } from "../AppProvider";

export const useUser = () => {
  return useContextSelector(AppContext, value => ({
    user: value.user,
    login: value.login,
    logout: value.logout,
  }))
}
