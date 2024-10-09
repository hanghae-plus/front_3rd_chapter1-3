import { shallowEquals } from "../equalities";
import { ComponentType, ReactElement, createElement } from "react";
import { useRef } from "../hooks";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  // 1. 이전 props를 저장할 ref 생성
  const MemoCompare = (props: P): ReactElement => {
    const ref = useRef<{
      prevProps: P | undefined;
      result: ReactElement | null;
    }>({
      prevProps: undefined,
      result: null,
    });

    // 2. props가 이전과 다르다면 새로운 렌더링 수행
    // 3. equals 함수를 사용하여 props 비교
    // 4. props가 변경된 경우에만 새로운 렌더링 수행

    if (!ref.current.prevProps || !equals(ref.current.prevProps, props)) {
      ref.current.result = createElement(Component, props);
      ref.current.prevProps = props;
    }

    //메모이제이션된 결과 반환
    return ref.current.result!;
  };

  return MemoCompare;
}
