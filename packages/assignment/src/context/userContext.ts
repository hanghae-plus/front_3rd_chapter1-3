import { User } from '../types';
import { createTypedContext } from '../utils';

export type UserContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const { context: UserContext, useContext: useUser } =
  createTypedContext<UserContextType>();
