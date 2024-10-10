import { createContext, useContext } from 'react';
import { AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType>({
  user: { id: 0, name: '', email: '' },
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);
