import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  // React의 useState를 이용하여 useRef 를 구현
  const [ref] = useState({ current: initialValue });
  return ref;
}
