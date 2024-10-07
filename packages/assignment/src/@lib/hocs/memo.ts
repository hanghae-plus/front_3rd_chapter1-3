import { useRef } from "../hooks/useRef";
import { shallowEquals } from "../equalities";
import { ComponentType } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  equals = shallowEquals
) {
  // 1. 이전 props를 저장할 ref 생성
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const prevRef = useRef<P | null>(null);
  // 2. 메모이제이션된 컴포넌트 생성

  // 3. equals 함수를 사용하여 props 비교
  const isChanged = !equals(prevRef.current, Component);
  // 4. props가 변경된 경우에만 새로운 렌더링 수행
  if (isChanged) {
    return Component;
  }
  return Component;
}
