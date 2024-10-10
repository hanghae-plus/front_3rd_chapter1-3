import { useState } from "react";

// - 제네릭을 사용하여 타입 안정성 확보
export function useRef<T>(initialValue: T): { current: T } {
  // - useState를 사용하여 객체를 생성
  // - setter를 반환하지 않아 불변성 보장
  const [ref] = useState({ current: initialValue });

  // - 객체를 반환하여 참조를 통한 값 변경 가능
  return ref;
}
