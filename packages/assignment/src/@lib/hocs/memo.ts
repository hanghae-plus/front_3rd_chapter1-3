import { ComponentType } from 'react';
import { shallowEquals } from '../equalities';

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  // 1. 이전 props를 저장할 변수 생성
  let prevProps: P | null = null;
  let prevResult: any = null;

  // 2. 메모이제이션된 컴포넌트 생성
  const MemoizedComponent = function (props: P) {
    // 3. equals 함수를 사용하여 props 비교
    if (prevProps === null || !equals(prevProps, props)) {
      // 4. props가 변경된 경우에만 새로운 렌더링 수행
      prevProps = { ...props };

      // Component가 클래스인 경우 new 키워드로 인스턴스화, 함수인 경우 직접 호출
      prevResult =
        typeof Component === 'function' &&
        Component.prototype &&
        Component.prototype.isReactComponent
          ? new (Component as any)(props)
          : (Component as any)(props);
    }

    return prevResult;
  } as ComponentType<P>;

  // displayName 설정 (디버깅에 도움됩니다)
  (MemoizedComponent as any).displayName = `Memo(${
    (Component as any).displayName || (Component as any).name || 'Component'
  })`;

  return MemoizedComponent;
}
