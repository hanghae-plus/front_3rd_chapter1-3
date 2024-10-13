import { createContext } from "react";

export interface User {
  id?: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
