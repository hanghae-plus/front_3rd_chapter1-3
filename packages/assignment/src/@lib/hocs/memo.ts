import { shallowEquals } from '../equalities';
import { ComponentType, ReactElement, createElement } from 'react';
import { useRef } from '../hooks';

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  // 1. 이전 props를 저장할 ref 생성
  // 2. 메모이제이션된 컴포넌트 생성
  // 3. equals 함수를 사용하여 props 비교
  // 4. props가 변경된 경우에만 새로운 렌더링 수행

  /*
  Q. 명색이 memoized 인데 useMemo 를 써서 만들어야 하는 거 아냐?
  A. (by Claude)
    - Memoization의 개념:
        Memoization은 계산 비용이 높은 함수의 결과를 저장하고 재사용하는 최적화 기법입니다. 이는 꼭 React의 useMemo 훅을 사용해야만 구현되는 것은 아닙니다.
    - React.memo와 useMemo의 차이:
        React.memo는 "컴포넌트 자체"를 메모이제이션합니다.
        useMemo는 "값"을 메모이제이션합니다.
    - 커스텀 memo 구현:
        우리가 구현하고 있는 memo 함수는 React.memo와 유사한 기능을 하는 HOC(Higher-Order Component)입니다. 이는 컴포넌트 레벨의 메모이제이션을 수행합니다.
    - useRef를 사용한 메모이제이션:
        useRef를 사용한 구현은 manual memoization의 한 형태입니다. 이 방식은 이전 props와 결과를 저장하고, 필요할 때만 새로운 결과를 생성합니다.
        * Manual memoization은 프로그래머가 직접 메모이제이션(memoization) 로직을 구현하는 기법을 말합니다.
    - useMemo vs useRef in this context:
        useMemo는 의존성 배열이 변경될 때마다 콜백 함수를 재실행합니다.
        useRef를 사용한 방식은 우리가 직접 비교 로직을 제어할 수 있게 해줍니다.
    따라서, 'memoized'라는 용어가 사용되었다고 해서 반드시 useMemo를 사용해야 하는 것은 아닙니다.
    이 경우, useRef를 사용한 구현이 React.memo의 동작을 더 정확하게 모방합니다.
  */

  // 이전 props를 저장할 ref 생성
  // 메모이제이션된 컴포넌트 생성
  const MemoisedComponent = (props: P): ReactElement => {
    const ref = useRef<{
      prevProps: P | undefined;
      result: ReactElement | null;
    }>({
      prevProps: undefined,
      result: null,
    });

    // 이전 props가 없거나, 현재 props와 다를 경우 새로운 엘리먼트를 생성
    // equals 함수를 사용하여 props 비교
    if (!ref.current.prevProps || !equals(ref.current.prevProps, props)) {
      // createElement는 React 엘리먼트를 생성하는 함수입니다.
      ref.current.result = createElement(Component, props);
      // 새로운 결과와 props를 ref에 저장
      ref.current.prevProps = props;
    }

    // 저장된 결과가 있을 시 바로 반환, 없으면 새로운 엘리먼트를 생성 반환
    return ref.current.result ?? createElement(Component, props);
  };

  // 디버깅을 위한 메모이제이션된 컴포넌트의 이름을 설정
  MemoisedComponent.displayName = `Memo(${
    Component.displayName || Component.name || 'Component'
  })`;

  return MemoisedComponent;
}
