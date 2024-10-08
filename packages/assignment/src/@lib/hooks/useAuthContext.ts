import { createContext, useContext } from "react";
import { AuthContextType } from "../../types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// 커스텀 훅: useAppContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
