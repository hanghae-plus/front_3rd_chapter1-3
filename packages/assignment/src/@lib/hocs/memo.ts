import { shallowEquals } from "../equalities";

type ComponentType<P> = (props: P) => void;

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  // 이전 props를 저장하기 위한 변수
  let prevRef: P | null = null;

  // 메모이제이션된 컴포넌트 반환
  return function MemoizedComponent(props: P) {
    // props 비교
    if (prevRef !== null && equals(prevRef, props)) {
      // 이전 props와 새 props가 같다면, 새로운 렌더링을 방지
      return;
    }

    // props가 변경된 경우에만 새로운 렌더링 수행
    prevRef = props;
    Component(props);
  };
}
