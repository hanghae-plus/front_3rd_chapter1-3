import { createContext } from "react";
import { ThemeContextType } from "../types";

/**
 * @description 테마 변경을 관리하는 컨텍스트입니다. 테마를 토글하는 기능을 제공합니다.
 * @default undefined - 기본값으로는 정의되지 않았으며, 반드시 Provider로 감싸서 사용해야 합니다.
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
