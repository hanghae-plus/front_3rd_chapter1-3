import { useState } from "react";

// useRef 훅은 렌더링 사이에 값을 유지하는 가변 ref 객체를 생성합니다.
export function useRef<T>(initialValue: T): { current: T } {
  // 1. useState를 사용하여 ref 객체를 생성 (렌더링이 발생해도 동일한 객체를 유지)
  const [ref] = useState(() => ({ current: initialValue }));

  // 2. ref 객체를 반환합니다.
  return ref;
}