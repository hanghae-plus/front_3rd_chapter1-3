import { useState } from "react";

/**
 * @description 렌더링 사이에 값을 유지하는 ref 객체를 생성하는 훅
 * @param initialValue - 초기 ref 값
 * @returns ref 객체
 */
export function useRef<T>(initialValue: T): { current: T } {
  const [ref] = useState({ current: initialValue });
  return ref;
}
