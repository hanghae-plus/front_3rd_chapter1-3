import { useContext } from 'react';
import { UserContext, UserContextType } from '../contexts/UserContext';

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

// 선택적: 개별 값에 대한 훅을 제공할 수 있습니다.
export const useUser = () => {
  const { user } = useUserContext();
  return user;
};

export const useLogin = () => {
  const { login } = useUserContext();
  return login;
};

export const useLogout = () => {
  const { logout } = useUserContext();
  return logout;
};
