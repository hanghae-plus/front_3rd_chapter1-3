import { createContext } from 'react';
import { UserContextType } from '../types/type';

/**
 * @description 사용자 정보와 관련 작업(로그인, 로그아웃 등)을 관리하기 위한 컨텍스트입
 * 서비스 내 다양한 컴포넌트에서 사용자 정보에 접근
 * 사용자 상태를 업데이트하는 함수가 포함되어 있으며, 컨텍스트의 기본값은 null로 지정함
 *
 * @type {React.Context<UserContextType | null>}
 */

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
