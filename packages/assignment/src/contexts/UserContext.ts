import { createContext } from "react";
import { User } from "../models/User";

interface UserContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
UserContext.displayName = "UserContext";
