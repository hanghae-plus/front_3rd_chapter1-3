import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  // useState를 통해 객체 생성
  const [ref] = useState<{ current: T }>({ current: initialValue });

  // ref 객체를 반환 (렌더링에는 영향을 주지 않음)
  return ref;
}
