/**
 * @description  테마 컨텍스트의 타입을 정의하는 인터페이스. 현재 테마와 테마 전환 함수가 포함.
 */
export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}