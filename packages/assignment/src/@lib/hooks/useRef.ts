import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  // useState를 사용하여 상태를 생성합니다.
  const [state] = useState({ current: initialValue });

  return state;
}
