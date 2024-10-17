import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  /**
   * useRef의 핵심 특징:
   * - 리렌더링 간에 값이 유지됨
   * - 값이 변경되어도 리렌더링을 트리거하지 않음
   * - mutable한 .current 속성을 가짐
   */
  /**
   * useState를 사용할 수 밖에 없는 이유:
   * 컴포넌트 리렌더링 시 함수 내부 모든 일반 변수는 새로 초기화되기 때문
   */
  const [ref] = useState({ current: initialValue });
  return ref;
}
