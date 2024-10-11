import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

/**
 * @function useTheme
 * @description ThemeContext를 사용하여 애플리케이션의 테마 설정에 접근하는 훅
 * 컨텍스트가 제공되지 않았을 경우 오류를 발생시키기 때문에 해당 컴포넌트가 ThemeProvider 내부에 위치해야 함
 * 
 * @returns {ThemeContextType} 테마 설정 데이터와 테마를 토글하는 함수를 포함한 컨텍스트 객체
 * @throws {Error} ThemeProvider 외부에서 훅을 사용할 경우 오류 발생
 */

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
