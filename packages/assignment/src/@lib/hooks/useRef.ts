import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  // useState로 참조값을 초기화
  const [ref] = useState<{ current: T }>({ current: initialValue });
  return ref;
}
