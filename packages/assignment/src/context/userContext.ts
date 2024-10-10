import { createContext, useContext } from 'react';
import { User } from '../types';

export type UserContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('UserProvider 안에서 쓰기!');
  return context;
};
