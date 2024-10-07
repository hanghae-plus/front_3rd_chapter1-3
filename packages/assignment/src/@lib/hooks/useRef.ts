import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  // React의 useState를 이용해서 만들어보세요.
  // useRef 훅은 current라는 속성을 가진 객체를 반환함.
  const [ref, unused] = useState({ current: initialValue });

  return ref; 
}
