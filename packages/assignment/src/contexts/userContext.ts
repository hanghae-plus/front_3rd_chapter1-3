import { createContext, useContext } from 'react';
import { AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
