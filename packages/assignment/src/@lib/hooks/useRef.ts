import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  // useState는 setRef 하는 게 아니면 리렌더링하지 않음
  const [ref] = useState<{ current: T }>({ current: initialValue });
  return ref;
}
