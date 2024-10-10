import { createContext } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
};
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
