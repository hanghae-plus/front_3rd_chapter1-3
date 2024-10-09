import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useRef } from "../hooks";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  // 메모이제이션된 컴포넌트 생성
  const MemoizedComponent: React.FC<P> = (props) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevProps = useRef<P | null>(null);

    // 2. props 비교 및 렌더링 결정
    const shouldUpdate = !equals(prevProps.current, props);

    // 3. 업데이트 필요하면 컴포넌트 업데이트
    if (shouldUpdate) {
      prevProps.current = props;
      return <Component {...props} />;
    }
    return null;
  };

  return MemoizedComponent;
}
