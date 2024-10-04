import { useAppContext } from "./useAppContext.ts";
import { useMemo } from "react";

export const useTheme = () => {
  const value = useAppContext();
  return useMemo(() => ({
    theme: value.theme,
    toggleTheme: value.toggleTheme,
  }), [value]);
}
