import { useContextSelector } from "../../@lib";
import { AppContext } from "../AppProvider";

export const useTheme = () => {
  return useContextSelector(AppContext, value => ({
    theme: value.theme,
    toggleTheme: value.toggleTheme,
  }))
}
