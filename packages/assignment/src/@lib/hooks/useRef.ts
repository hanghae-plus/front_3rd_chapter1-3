import { useState } from "react";
// <T> 뭘까? 타입이 무엇이든 가능하다는 뜻입니다.
// use
export function useRef<T>(initialValue: T): { current: T } {
  // React의 useState를 이용해서 만들어보세요.
  const [ref, setRef] = useState({ current: initialValue });
  return ref;
}
