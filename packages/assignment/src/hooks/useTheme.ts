import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Theme Provider를 찾을 수 없습니다.');
  }

  return context;
};

export default useTheme;
