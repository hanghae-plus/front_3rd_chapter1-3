import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  // React의 useState를 이용해서 만들어보세요.

  const [ref, unsed] = useState({ current: initialValue });

  return ref;
}
