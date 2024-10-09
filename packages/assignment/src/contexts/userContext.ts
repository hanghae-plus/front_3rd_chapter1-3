import { createContext, useContext } from "react";
import { UserContextType } from "../types";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a ThemeProvider");
  return context;
};
