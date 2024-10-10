import { deepEquals } from "../equalities/index.ts";
import { ComponentType } from "react";
import { memo } from "./memo.tsx";

/**
 * @description 컴포넌트의 props를 깊은 비교하여 불필요한 리렌더링을 방지하는 HOC입니다.
 * @param Component - 리렌더링을 방지할 대상 컴포넌트
 * @returns props가 변경되지 않았다면 리렌더링을 방지하는 컴포넌트 반환
 */
export function deepMemo<P extends object>(Component: ComponentType<P>) {
  // memo HOC를 사용하여 deepEquals로 props를 깊은 비교
  return memo(Component, deepEquals);
}
