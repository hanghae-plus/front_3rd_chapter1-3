import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('User Provider를 찾을 수 없습니다.');
  }

  return context;
};

export default useUser;
