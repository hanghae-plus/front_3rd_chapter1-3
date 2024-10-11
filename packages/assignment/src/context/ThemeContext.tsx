import { createContext } from 'react';
import { ThemeContextType } from '../types/type'

/**
 * @description 서비스의 테마 상태(예: 밝기, 색상 모드)를 관리하기 위한 컨텍스트
 * 테마 상태와 테마를 변경하는 함수가 포함되어 있으며, 컨텍스트의 기본값은 null로 지정함
 *
 * @type {React.Context<ThemeContextType | null>}
 */

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
