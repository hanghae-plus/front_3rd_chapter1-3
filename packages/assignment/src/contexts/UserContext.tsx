import { createContext } from 'react';
import { User } from '../types';

interface UserContextProps {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps | null>(null);
