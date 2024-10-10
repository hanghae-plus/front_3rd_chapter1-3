import { createContext } from "react";
import { UserContextType } from "../types";

/**
 * @description 사용자 로그인 및 로그아웃 상태를 관리하는 컨텍스트입니다.
 * @default undefined - 기본값으로는 정의되지 않았으며, 반드시 Provider로 감싸서 사용해야 합니다.
 */
export const UserContext = createContext<UserContextType | undefined>(undefined);
