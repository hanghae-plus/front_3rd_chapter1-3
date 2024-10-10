import { User } from "./User";

/**
 * @description 사용자 컨텍스트의 타입을 정의하는 인터페이스. 사용자 정보 및 로그인/로그아웃 함수가 포함.
 */
export interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}
