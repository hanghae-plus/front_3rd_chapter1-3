import { useState } from "react";

// useRef 훅은 렌더링 사이에 값을 유지하는 가변 ref 객체를 생성합니다.
export function useRef<T>(initialValue: T): { current: T } {
  // - useState를 사용하여 객체를 생성
  // - setter를 반환하지 않아 불변성 보장
  const [ref] = useState({ current: initialValue });

  // - 객체를 반환하여 참조를 통한 값 변경 가능
  return ref;
}

// 제네릭을 사용하여 초기 값의 타입을 동적으로 설정하고, 타입 안전성을 확보
// 상태 관리 함수인 setter는 반환하지 않아 값 변경은 current를 통해서만 가능 (불변성 보장)
// current 속성을 통해 ref 객체를 반환하여 렌더링과 무관하게 값을 유지하고 참조 가능
