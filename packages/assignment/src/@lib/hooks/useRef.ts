import { useState } from "react";

/**
 * @function useRef
 * @description 지정된 초기 값으로 ref 객체를 생성하고 반환
 * 초기 값으로 ref 객체를 생성하여, 해당 객체의 current 속성을 통해 값에 접근할 수 있도록 함
 * 반환된 ref 객체는 컴포넌트의 생명 주기 동안 지속적으로 동일한 참조를 유지
 *
 * @param {T} initialValue - ref 객체의 초기 값
 * @returns {{ current: T }} - 초기 값이 설정된 ref 객체
 * @template T - ref 객체에 저장할 값의 타입
 */

export function useRef<T>(initialValue: T): { current: T } {
  // useState를 사용하여 ref 객체를 생성하고 초기 값으로 설정
  const [ref] = useState<{ current: T }>({ current: initialValue });
  return ref;
}
