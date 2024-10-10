import { createContext, useContext } from 'react';

export interface User {  
  email: string;
  password: string;
  name: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string, name: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
