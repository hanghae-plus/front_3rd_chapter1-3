import { createContext } from 'react';
import { UserContextType } from '../types/type';

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
